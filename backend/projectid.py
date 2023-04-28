from fastapi import status, Response
import mysql.connector


def mySQL_Connection():
    mySQL = mysql.connector.connect(
        host="localhost", user="root", password="", database="manageapi")
    myCursor = mySQL.cursor(dictionary=True)
    return mySQL, myCursor


def get_projectid(id: int, response: Response):
    mySQL, myCursor = mySQL_Connection()

    myproducts = 'SELECT * FROM `projects` WHERE `project_id` = %s'
    val = (id, )
    myCursor.execute(myproducts, val)
    mystringprojects = myCursor.fetchone()

    if mystringprojects is None:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "ไม่มีสินค้าชิ้นนี้ในฐานข้อมูล"}
    else:
        result = {}
        result['project_id'] = mystringprojects['project_id']
        result['project_name'] = mystringprojects['project_name']
        result['project_url'] = mystringprojects['project_url']
        result['project_key'] = mystringprojects['project_key']
        result['project_section'] = mystringprojects['project_section']
        
        mySQL.close()
        myCursor.close()
        response.status_code = status.HTTP_200_OK
        return result

    #     if mystringcomponents:
    #         component = []
    #         for data in mystringcomponents:
    #             components = {}
    #             components['name'] = data['component_name']
    #             components['value'] = data['component_type']
    #             component.append(components)
    #         result['product_component'] = component
    #     else:
    #         result['product_component'] = None

    #     mySQL.close()
    #     myCursor.close()
    #     response.status_code = status.HTTP_200_OK
    #     return result
