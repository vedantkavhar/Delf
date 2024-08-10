import { useLocalStorage } from './useLocalStorage';

export function LogInAuth(userEmail, userPassword) {
  const { getValue } = useLocalStorage();  // Check if user exists
  const existingUserData = getValue(userEmail);
  if (existingUserData === null) {     // No user found with the provided email
    return 'No such user';
  } 
  else {     // User found, check password
    if (existingUserData.password === userPassword) {       // Passwords match, successful login
      return 'Successfully logged in!';
    } 
    else {      // Passwords don't match, wrong password
        console.log(existingUserData.password);
      return 'Wrong password';

    }
  }
}

export function UserName(userEmail, userPassword) {
  const { getValue } = useLocalStorage(userEmail,userPassword); 
  // Check if user exists
  // console.log("-------userName - "+getValue(userName)+" userEmail- "+getValue(userEmail)+" userPassword - "+getValue(userPassword))
  const cUserName = getValue(userEmail);
  // console.log(cUserName);
  if (cUserName === null) {     // No user found with the provided email
    return "";
  } 
  else {     // User found, check password
    return cUserName
  }
  return "sumit";
}


export function SignInAuth(userEmail, userName, userPassword) {
  const { getValue, setValue } = useLocalStorage();     // Check if user already exists
  const existingUser = getValue(userEmail);  
  if (existingUser === null) {          // User does not exist, proceed with sign-in
    setValue(userEmail, { name: userName, password: userPassword });  
    return 'Successfully Account Created';
  } 
  else {       // User already exists, return error message
    return 'Unsuccessful sign-in. User already exists.';
  }
}

export function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurants)=>
        restaurants?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
    return filterData;
}