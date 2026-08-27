import React from 'react'

const UserCard = ({user}) => {
    const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ElnqybKu82MrfBK-dIy15kpM1zATiw9ytB8esiA8LGCGoX5dnFns7KzA&s=10" //{photoUrl}
    alt="photo"
    className="w-85 h-85 object-cover my-2"
  />
</figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age&& gender && <p>{age+", "+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
