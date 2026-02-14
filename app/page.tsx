import WhoIam from '@/components/Me/whoIam';
import GetInTouch from '@/components/Me/getintouch';
import Education from '@/components/Me/education';
import Myskills from '@/components/Me/myskills';
import Hobbies from '@/components/Me/Hobbies';
import RecentProjects from '@/components/projects/recentprojects'
function Page(){
    return (
        <main className="">
           
                <WhoIam/>
                <Myskills/>
                <Education/>
                <Hobbies />
                
            <RecentProjects/>

           <GetInTouch/>

        </main>
    )
}
export default Page;