import { useGetAllEnrolledCoursesQuery } from '../../redux/features/student/studentCourseManagement.api';

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);

  return (
    <div>
      {data?.data?.map((item: any) => {
        return (
          <div key={item._id}>
            <div>{item.course.title}</div>
            <div>{item.offeredCourse.section}</div>
            <div>
              {item.offeredCourse.days.map((item: any) => (
                <span key={item}> {item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MySchedule;
