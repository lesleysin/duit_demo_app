import "package:duit_kernel/duit_kernel.dart";
import "package:flutter/material.dart";
import "package:flutter_duit/flutter_duit.dart";
import "package:flutter_svg/svg.dart";

class SvgWidgetAttributes implements DuitAttributes<SvgWidgetAttributes> {
  final String content;
  final double? width, height;

  SvgWidgetAttributes({
    required this.content,
    this.height,
    this.width,
  });

  static SvgWidgetAttributes fromJson(Map<String, dynamic> json) {
    final w = json["width"] as num?;
    final h = json["height"] as num?;
    return SvgWidgetAttributes(
      content: json["content"] ?? "",
      height: w?.toDouble(),
      width: h?.toDouble(),
    );
  }

  @override
  SvgWidgetAttributes copyWith(other) {
    return SvgWidgetAttributes(
      content: other.content,
      height: other.height ?? height,
      width: other.width ?? width,
    );
  }
}

final class SvgWidget extends DuitElement {
  SvgWidget({
    required super.id,
    required super.attributes,
    required super.viewController,
    required super.controlled,
  }) : super(
          type: "Custom",
          tag: "svg",
        );
}

DuitAttributes svgAttributesMapper(
  String type,
  Map<String, dynamic>? json,
) {
  return SvgWidgetAttributes.fromJson(json ?? {});
}

Widget svgRenderer(TreeElement model) {
  final data = model.attributes?.payload as SvgWidgetAttributes;

  return SvgPicture.string(
    data.content,
    width: data.width,
    height: data.height,
  );
}

DuitElement svgModelMapper(
  String id,
  bool controlled,
  ViewAttributeWrapper attributes,
  UIElementController? controller,
) {
  return SvgWidget(
    id: id,
    attributes: attributes,
    viewController: controller,
    controlled: controlled,
  );
}
