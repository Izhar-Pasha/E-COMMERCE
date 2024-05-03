import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "mdizharpasha07",
    }).then(()=>{
        console.log("Connected to database is successful!");
    }).catch((err)=>{
        console.log(`Some error occured while cnnecting to database! ${err}`);
    });

}
