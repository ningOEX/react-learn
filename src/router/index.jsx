import { createBrowserRouter as Router } from 'react-router-dom';
import Layout from "../components/Layout";
import Admin from "../views/Admin";
import Login from "../views/Login";
import Error from "../views/Error";
import Menu from "../components/Menu";
import Header from "../components/Header";

import StudentAdd from "../views/student/StudentAdd";
import StudentList from "../views/student/StudentList"
import CourseAdd from "../views/course/CourseAdd";
import CourseList from "../views/course/CourseList"


/**
 * History 模式 (createBrowserRouter)
 * hash 模式 (createHashRouter)
 */
const router = Router([
  {
    path: '/',
    element: <Layout header={<Header/>} aside={<Menu/>} />,
    children: [
      { index: true, element: <Admin /> },
      { path: 'student', element: <StudentList /> },
      { path: 'student/add', element: <StudentAdd /> },
      { path: 'course', element: <CourseList /> },
      { path: 'course/add', element: <CourseAdd /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;