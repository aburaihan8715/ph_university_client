import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { getCurrentToken, TUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import { ItemType } from 'antd/es/menu/interface';
// import { ItemType } from 'antd/lib/menu/hooks/useItems';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  const token = useAppSelector(getCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems: ItemType[] | undefined;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(
        adminPaths,
        userRole.ADMIN
      ) as ItemType[];
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(
        facultyPaths,
        userRole.FACULTY
      ) as ItemType[];
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(
        studentPaths,
        userRole.STUDENT
      ) as ItemType[];
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
    >
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
