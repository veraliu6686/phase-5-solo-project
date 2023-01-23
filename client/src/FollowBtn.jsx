import React,{useState} from "react"

export default function FollowBtn({user, currentUser, setErrors}){
    const [followed, setFollowed] = useState(user.followers.filter(follower=> console.log(follower.follower_id == user.id) ))

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
            console.log(follow)
            .then(res=>{
                if(res.ok){
                    setFollowed(false)
                }
            })
        }else if(user.id !== currentUser.id){
            fetch("/api/follows",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...followed, follow})
            })
            .then(res => {
                if(res.ok){
                    res.json()
                    .then(data=>{setFollowed(data)})
                }else{
                    res.json().then(data =>setErrors(Object.entries(data.errors).map(e => `${e[1]}`)))
                }
            })
        setFollowed(true)
        } else{
            setErrors("You can't follow yourself")
        }
    }

    return(
        <button className="btn btn-warning rounded-full lowercase text-base hover:text-base hover:text-white items-center" onClick={handleFollow}> {followed? "unfollow ": "follow"}
        </button>
    )

 }
