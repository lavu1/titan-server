import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { config } from 'dotenv';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointment.module';
import { DevicesModule } from './devices/devices.module';
import { TechniciansModule } from './technicians/technicians.module';
import { TypeOfServiceModule } from './type-of-service/type-of-service.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { InstallationsModule } from './installations/installations.module';
import { JobSitesModule } from './job-sites/job-sites.module';
import { FleetOwnersModule } from './fleet-owners/fleet-owners.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TelematicsProvidersModule } from './telematics-providers/telematics-providers.module';
import { OfficePersonelModule } from './office-personel/office-personel.module';
import { WorkOrdersModule } from './work-orders/work-orders.module';
import { UsersModule } from './users/users.module';
import { OfficeModule } from './office/office.module';
config();
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'mysql',
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // should be removed in production otherwise data will be lost
      autoLoadEntities: true,
      logging: true,
    }),
    AppointmentsModule,
    DevicesModule,
    TechniciansModule,
    TypeOfServiceModule,
    VehiclesModule,
    InstallationsModule,
    JobSitesModule,
    FleetOwnersModule,
    TelematicsProvidersModule,
    OfficePersonelModule,
    WorkOrdersModule,
    UsersModule,
    OfficeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
