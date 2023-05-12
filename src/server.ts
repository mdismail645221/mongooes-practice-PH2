import mongoose from 'mongoose';
const port = 5000;
import app from './app'


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongodb');
        console.log(`mongodb server is connected now`)

        app.listen(port, () => {
            console.log(`server app is listening on port ${port}`)
          })

    } catch (error) {
        console.log(`mongodb connected losed`, error)
    }
  }

bootstrap()




