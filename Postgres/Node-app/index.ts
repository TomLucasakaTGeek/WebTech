import { Client } from 'pg'

const client=new Client({
    connectionString: 'postgresql://tanmaykhanna_202210101140013:AliRb1Qcz2EU@ep-ancient-bird-a5vcfc6b.us-east-2.aws.neon.tech/SequelDB?sslmode=require',
}) 

client.connect()

async function createUsersTable(){
    const result=await client.query(`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255)  UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH THE TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
`)
    console.log(result)
}

createUsersTable()

async function insertData() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
    
    try{
        await client.connect()
        const insertQuery='INSERT INTO users (username, email, password) VALUES ("username2", "user3@example.com", "mypassword")'
        const res=await client.query(insertQuery)
        console.log('Insertion success:',res)
    }catch(err){
        console.error('Error occured', err)
    }finally{
        await client.end()
    }
}
insertData();
