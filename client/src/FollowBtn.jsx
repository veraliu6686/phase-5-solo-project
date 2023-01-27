import React,{useState} from "react"

export default function FollowBtn({user, currentUser, setErrors, setUpdateFollow}){
    const [followed, setFollowed] = useState(user.followers.filter(follower=> (follower.follower_id == currentUser.id)).length > 0)
    const handleFollow=()=>{
        const follow = {
                    followed_id: user.id,
                    follower_id: currentUser.id
                }
        if(followed){
            fetch("/api/unfollow", {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(follow)
            })
            .then(res=>{
                if(res.ok){
                    setFollowed(false)
                    setUpdateFollow(prev=>!prev)
                }
            })
        }else if(user.id !== currentUser.id){
            fetch("/api/follows",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...user.followers, follow})
            })
            .then(res => {
                if(res.ok){
                    res.json()
                    .then(setFollowed)
                }else{
                    res.json().then(data =>setErrors(Object.entries(data.errors).map(e => `${e[1]}`)))
                }
            })
        setFollowed(true)
        setUpdateFollow(prev=>!prev)
        }else{
            setErrors("You can't follow yourself")
        }
    }

    return(
        <>
        { user.id === currentUser.id ? <></> :

        <button className="btn btn-warning rounded-full lowercase text-base hover:text-base hover:text-white items-center mb-5" onClick={handleFollow}> {followed? "unfollow ": "follow"}
        </button>
        }
        </>
    )

 }
