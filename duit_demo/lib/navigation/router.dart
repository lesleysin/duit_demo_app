import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'duit_screen.dart';

final router = GoRouter(
  initialLocation: "/duit",
  routes: [
    ShellRoute(
        routes: [
          GoRoute(
            path: '/duit',
            builder: (context, state) {
              final path = state.extra as String?;
              return DuitScreen(
                path: path,
              );
            },
          ),
        ],
        builder: (context, state, child) {
          return Scaffold(
            body: SafeArea(
              child: child,
            ),
          );
        }),
  ],
);
