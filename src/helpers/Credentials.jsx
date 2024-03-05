import bcrypt from 'bcryptjs';
const SALT_ROUND =10;
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

const adminPasswordHash = bcrypt.hashSync(adminPassword, SALT_ROUND);

const admin ={
    username:"agusadmin",
    passwordHash: adminPasswordHash,
}

export{admin};