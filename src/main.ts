import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config-merger';
import { TransformInterceptor } from './global/interceptors/transformer.interceptor';

async function bootstrap() {
	console.log('bootstrap called');
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: '*'
	})
	config.get('swagger.config').call(app);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(app.get(Reflector), {
			excludePrefixes: ['_'],
		}),
	);
	app.useGlobalInterceptors(new TransformInterceptor());
	console.log('middle');

	const port = config.getPort() || 5050;
	console.log(port);

	await app.listen(port, () => {
		console.log(
			'\n',
			'\x1b[33m',
			`Listening on port: ${port}. Please head over to http://localhost:${port}/api for Swagger docs.`,
		);
	});
}
bootstrap();
