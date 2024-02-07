import 'package:duit_demo/common/dio.dart';
import 'package:duit_demo/duit/svg.dart';
import 'package:duit_kernel/duit_kernel.dart';
import 'package:flutter/material.dart';

import 'navigation/router.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  DuitRegistry.register(
    "svg",
    svgModelMapper,
    svgRenderer,
    svgAttributesMapper,
  );
  final res = await dio.get("/components");
  DuitRegistry.registerComponents([
    ...res.data,
  ]);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: router,
    );
  }
}
