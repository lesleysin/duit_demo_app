import "dart:async";

import "package:duit_demo/duit/dio_extension.dart";
import "package:flutter/material.dart";
import "package:flutter_duit/flutter_duit.dart";
import "package:go_router/go_router.dart";

import "../common/dio.dart";

class _Handler implements ExternalEventHandler {
  @override
  FutureOr<void> handleNavigation(
    BuildContext context,
    String path,
    Object? extra,
  ) {
    final map = extra as Map<String, dynamic>;
    final duitPath = map["path"] as String;
    context.push(path, extra: duitPath);
  }

  @override
  FutureOr<void> handleOpenUrl(String url) {
    // TODO: implement handleOpenUrl
    throw UnimplementedError();
  }
}

//Создаем новый виджет и наследуемся от StatefulWidget
//для привязки к жизненному циклу
class DuitScreen extends StatefulWidget {
  final String? path;

  const DuitScreen({
    super.key,
    //Экран принимает единственный параметр path
    //В случае, если параметр не передан, используется значение по умолчанию
    this.path = "/main",
  });

  @override
  State<DuitScreen> createState() => _DuitScreenState();
}

class _DuitScreenState extends State<DuitScreen> {
  //Создаем переменную для экземпляра DuitDriver
  late final DuitDriver _driver;

  @override
  void initState() {
    //Инициализируем DuitDriver
    _driver = DuitDriver(
      widget.path ?? "/main",
      eventHandler: _Handler(),
      //Определяем параметры подключения
      //В нашем случае используется HTTP транспорт, все запросы будут выполняться
      //в рамках этого протокола
      transportOptions: DioTransportOptions(
        //Указываем базовые настройки транспорта
        baseUrl: "http://localhost:8999",
        dio: dio,
      ),
    )..applyDioTransportExtension();
    super.initState();
  }

  @override
  void dispose() {
    //Уничтожаем экземпляр DuitDriver
    _driver.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    //Возвращаем DuitViewHost и передаем туда экземпляр DuitDriver
    return DuitViewHost(
      driver: _driver,
      context: context,
      placeholder: const CircularProgressIndicator(),
    );
  }
}
