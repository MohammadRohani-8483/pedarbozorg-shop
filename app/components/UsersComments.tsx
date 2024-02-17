import { pedarBozorgInLifeImages } from "public/data/pedarBozorgInLifeImage"
import CommentsSlider from "./commentsSlider"

const UsersComments = () => {
    return (
        <div className='flex flex-col gap-8 mx-auto justify-center items-center mt-20'>
            <div className='flex'>
                <h1 className='font-bold text-2xl text-base-300'>نظرات کاربران</h1>
            </div>
            <CommentsSlider />
        </div>
    )
}

export default UsersComments