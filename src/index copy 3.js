import React from "react";
import ReactDOM from "react-dom/client";
import StudentList from "./components/StudentList"

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * 获取所有学生数据
 * @param {*} delay 
 */
async function fetchStudentAll(callBack) {
  setTimeout(() => {
    const newArr = new Array(20);
    const allStudent = newArr.fill(0).map((item, i) => {
      return {
        name: "张" + i,
        age: 18 + i,
        id: i,
        email: 10000 + i + "45678@qq.com"
      };
    });
    callBack(allStudent)
  }, 2000);
}

function loading() {
  root.render(
    <React.StrictMode>
      <>加载中...</>
    </React.StrictMode>
  );
}

async function render() {
  loading()
  await fetchStudentAll((studentList) => {
    root.render(
      <React.StrictMode>
        <StudentList studentList={studentList}></StudentList>
      </React.StrictMode>
    );
  })
}

render()
