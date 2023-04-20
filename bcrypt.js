const bcrypt = require('bcryptjs');

const securePassword = async (password) =>{

   const passwordHash = await bcrypt.hash(password,10);
   console.log(passwordHash);

   const pass = await bcrypt.compare(password,passwordHash);
   console.log(pass); //returns true
}

securePassword('bishal@123')