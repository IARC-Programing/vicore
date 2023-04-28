
from fastapi import FastAPI, Response, status, HTTPException

import requests

from fastapi.middleware.cors import CORSMiddleware

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

import mysql.connector

from projects import get_projects, mySQL_Connection
from projectid import get_projectid

from eaccoms import get_eaccoms

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#  การอัพเดทฐานข้อมูลเกี่ยวกับโปรเจ็ค
@app.put("/projects")
async def update_project(data: dict):
    projectId = data.get("project_id")
    projectName = data.get("project_name")
    projectAPI = data.get("project_url")
    projectKey = data.get("project_key")
    projectSection = data.get("project_section")
    
    if not all ([projectName, projectAPI, projectKey, projectSection]):
        raise HTTPException(status_code=400, detail="กรุณากรอกข้อมูลให้ครบถ้วนก่อนที่จะบันทึกลงฐานข้อมูล")
    try:
        mySQL, myCursor = mySQL_Connection()
        
        stringDatabase = "UPDATE `projects` SET `project_name` = %s, `project_url` = %s, `project_key` = %s, `project_section` = %s WHERE `projects`.`project_id` = %s"
        variableDatabase = (projectName, projectAPI, projectKey, projectSection, projectId)
        myCursor.execute(stringDatabase, variableDatabase)
        
        mySQL.commit()
        mySQL.close()
        myCursor.close()
        return JSONResponse(content=jsonable_encoder({"message": "คุณได้อัพเดทข้อมูลลงฐานข้อมูลเรียบร้อยแล้ว"}))
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))
    
@app.delete("/projects/delete/{id}")
def delete_project(id: int, respone: Response):
    mySQL, myCursor = mySQL_Connection()
    
    stringDatabase = "DELETE FROM `projects` WHERE `projects`.`project_id` = %s"
    val = (id, )
    myCursor.execute(stringDatabase, val)
    
    mySQL.commit()
    mySQL.close()
    myCursor.close()
    return JSONResponse(content=jsonable_encoder({"message": "คุณได้ลบข้อมูลออกจากฐานข้อมูลเรียบร้อยแล้ว"}))

# การเพิ่มฐานข้อมูลเกี่ยวกับโปรเจ็ค
@app.post("/projects/post")
async def insert_user(data: dict):
    Project_description = data.get("project_name")
    Project_api = data.get("project_url")
    Project_key = data.get("project_key")
    Project_section = data.get("project_section")

    if not all([Project_description, Project_api, Project_key, Project_section]):
        raise HTTPException(
            status_code=400, detail="กรุณากรอกข้อมูลให้ครบถ้วนก่อนที่จะบันทึกลงฐานข้อมูล")
    try:
        mySQL, myCursor = mySQL_Connection()

        Database = "INSERT INTO `projects` (`project_name`, `project_url`, `project_key`, `project_section`) VALUES (%s, %s, %s, %s)"
        Variable = (Project_description, Project_api, Project_key, Project_section)
        myCursor.execute(Database, Variable)

        mySQL.commit()
        mySQL.close()
        myCursor.close()
        return JSONResponse(content=jsonable_encoder({"message": "คุณได้บันทึกลงฐานข้อมูลเรียบร้อยแล้ว"}))
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))

# ดึงไอดีข้อมูลแก้ไขเกี่ยวกับโปรเจค
@app.get("/EditForms/{id}")
def read_project(id: int, response: Response):
    return get_projectid(id, response)

@app.get("/project/{id}")
def read_project(id: int, response: Response):
    return get_projectid(id, response)

@app.get("/api/accoms/rooms")
async def get_rooms():
    url = "https://demo.eaccom.net/api/v1/room/"
    response = requests.get(url)
    data = response.json()
    return data

@app.get("/api/projects")
def read_products():
    products = get_projects()
    return JSONResponse(content=jsonable_encoder(products))
