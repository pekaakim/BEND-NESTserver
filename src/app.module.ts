import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './controllers/users/users.module';
import { ToursModule } from './controllers/tours/tours.module';
import { OrderModule } from './controllers/order/order.module';
import { TourItemModule } from './controllers/tour-item/tour-item.module';



@Module({
  imports: [UsersModule, OrderModule, ToursModule, TourItemModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
