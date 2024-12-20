import { UserProfile } from '@clerk/nextjs'

const Page = () => {
    return (<div className=" flex justify-center mt-32 min-h-screen">
        <UserProfile />
    </div>)
}
export default Page