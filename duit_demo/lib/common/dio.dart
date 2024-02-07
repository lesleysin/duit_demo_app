import 'package:dio/dio.dart';

final dio = Dio(
  BaseOptions(
    baseUrl: "http://localhost:8999",
    responseType: ResponseType.json,
    headers: {
      "Content-Type": "application/json",
    },
  ),
);
