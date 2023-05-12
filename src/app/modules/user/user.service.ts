import User from "./user.model"

 //asyn fucntion
 export const createUserToDB =async () => {
    const user = await new User({
      id: "9899889100",
      password: 'a6546',
      name: {
        firstName: '65496',
        middleName: '+654+',
        lastName: '654654',
      },
      dateOfBirth: '24/07/65',
      gender: 'female',
      email: 'bacaasdk@gmail.com',
      contactNo: '01872147100377',
      emergencyContactNo: '01872147103777',
      presentAddress: 'naiaa',
      permanentAddress: 'naaaa'
    })
    await user.save()
    return user;
  }