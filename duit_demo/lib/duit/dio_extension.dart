import 'dart:async';
import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:duit_kernel/duit_kernel.dart';

class DioTransportOptions extends TransportOptions {
  @override
  String? baseUrl;

  @override
  Map<String, String> defaultHeaders;

  @override
  String type = "dio";

  final Dio dio;

  DioTransportOptions({
    required this.baseUrl,
    required this.dio,
    this.defaultHeaders = const {},
  });
}

class DioTransport extends Transport {
  final DioTransportOptions options;

  DioTransport(super.url, this.options);

  @override
  Future<Map<String, dynamic>?> connect() async {
    final res = await options.dio.get(url);
    return jsonDecode(res.data) as Map<String, dynamic>;
  }

  @override
  void dispose() {
    // TODO: очистка ресурсов, если требуется
  }

  @override
  FutureOr<Map<String, dynamic>?> execute(
    ServerAction action,
    Map<String, dynamic> payload,
  ) async {
    String method = switch (action.meta) {
      null => "GET",
      HttpActionMetainfo() => action.meta!.method,
    };

    var urlString = action.event;

    if (method == "GET" && payload.isNotEmpty) {
      urlString += "?";
      payload.forEach((key, value) {
        urlString += "$key=$value";
      });
    }

    final res = await options.dio.request(
      urlString,
      options: Options(
        method: method,
      ),
      data: method == "GET" ? null : payload,
    );
    return jsonDecode(res.data) as Map<String, dynamic>;
  }
}

extension DioTransportExtension on UIDriver {
  applyDioTransportExtension() {
    transport = DioTransport(
      source,
      transportOptions as DioTransportOptions,
    );
  }
}
