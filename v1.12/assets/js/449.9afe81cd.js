(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1345:function(t,_,e){t.exports=e.p+"assets/img/main_image.489b9d44.jpg"},1346:function(t,_,e){t.exports=e.p+"assets/img/mechanical.3680be13.png"},2301:function(t,_,e){"use strict";e.r(_);var r=e(19),v=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pomegranate-시스템-전원-모듈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pomegranate-시스템-전원-모듈"}},[t._v("#")]),t._v(" Pomegranate 시스템 전원 모듈")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1345),alt:"모듈 이미지"}})]),t._v(" "),r("p",[t._v("고해상도 전류 통합 기능과 전력 모니터링 기능이 있는 5V/2A 전원, 단일 UAVCAN v0 CANbus 인터페이스와 RGB 상태 LED가 있는 디지털 전원 모듈.")]),t._v(" "),r("p",[t._v("자세한 설정과 문제 해결 정보는 "),r("a",{attrs:{href:"https://p-systems.io/product/power_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("제조업체 홈 페이지"),r("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),r("h2",{attrs:{id:"사양"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사양"}},[t._v("#")]),t._v(" 사양")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("입력 전압:")]),t._v(" 6-26V (2-6S)")]),t._v(" "),r("li",[r("strong",[t._v("최대 연속 전류:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("벤치탑:")]),t._v(" 40A")]),t._v(" "),r("li",[r("strong",[t._v("강제 냉각:")]),t._v(" 100A")])])]),t._v(" "),r("li",[r("strong",[t._v("최대 5V 출력 전류:")]),t._v(" 2A")]),t._v(" "),r("li",[r("strong",[t._v("전압 해상도:")]),t._v(" 0.04 ΔV")]),t._v(" "),r("li",[r("strong",[t._v("전류 해상도:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("기본/배터리 버스:")]),t._v(" 0.02 ΔA")]),t._v(" "),r("li",[r("strong",[t._v("5V 버스:")]),t._v(" 0.001 ΔA")])])]),t._v(" "),r("li",[r("strong",[t._v("CANbus 종단:")]),t._v(" 전자 (기본값)")]),t._v(" "),r("li",[r("strong",[t._v("MCU:")]),t._v(" STM32 F302K8U")]),t._v(" "),r("li",[r("strong",[t._v("펨웨어:")]),t._v(" "),r("a",{attrs:{href:"https://bitbucket.org/p-systems/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("오픈 소스"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("strong",[t._v("전기 인터페이스:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("전원:")]),t._v(" 솔더 패드 또는 XT60PW (직각, 보드 장착 커넥터)")]),t._v(" "),r("li",[r("strong",[t._v("CANbus")]),t._v(" 듀얼 JST GH-4 (표준 UAVCAN 마이크로 커넥터)")]),t._v(" "),r("li",[r("strong",[t._v("I2C / 직렬:")]),t._v(" JST GH-5")]),t._v(" "),r("li",[r("strong",[t._v("5V 출력:")]),t._v(" 솔더 패드 또는 CANbus / I2C 커넥터")])])]),t._v(" "),r("li",[r("strong",[t._v("장치 질량:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("커넥터 제외:")]),t._v(" 9g")]),t._v(" "),r("li",[r("strong",[t._v("XT60PW 커넥터 포함:")]),t._v(" 16g")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:e(1346),alt:"크기"}})]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" 매개변수를 "),r("code",[t._v("2")]),t._v(" (센서 자동 구성) 또는 "),r("code",[t._v("3")]),t._v("으로 설정하여 UAVCAN을 활성화합니다.")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mavlink 콘솔"),r("OutboundLink")],1),t._v("을 사용하여 다음 모듈의 매개변수를 설정합니다.\n"),r("ul",[r("li",[t._v("배터리 용량 (mAh): "),r("code",[t._v("battery_capacity_mAh")])]),t._v(" "),r("li",[r("em",[t._v("full")]),t._v(" 일 때 배터리 전압: "),r("code",[t._v("battery_full_V")])]),t._v(" "),r("li",[r("em",[t._v("비어있을 때")]),t._v(" 배터리 전압 : "),r("code",[t._v("battery_empty_V")])]),t._v(" "),r("li",[t._v("현재 통합 켜기: "),r("code",[t._v("enable_current_track")])]),t._v(" "),r("li",[t._v("(선택 사항) CANbus 종단 저항 끄기: "),r("code",[t._v("enable_can_term")])])])])]),t._v(" "),r("p",[r("strong",[t._v("예:")]),t._v(" "),r("code",[t._v("5000mAh")]),t._v(" 용량의 "),r("code",[t._v("3S")]),t._v(" LiPo에 연결된 UAVCAN 노드 ID가 "),r("code",[t._v("125")]),t._v(" 인 전원 모듈을 아래의 명령으로 설정할 수 있습니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("uavcan param set 125 battery_capacity_mAh 5000\nuavcan param set 125 battery_full_V 12.5\nuavcan param set 125 battery_empty_V 11.2\nuavcan param set 125 enable_current_track 1\nuavcan param save 125\n")])])]),r("p",[t._v("전체 매개변수 목록은 "),r("a",{attrs:{href:"https://p-systems.io/product/power_module/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("장치 설정 페이지"),r("OutboundLink")],1),t._v("를 참고하십시오.")])])}),[],!1,null,null,null);_.default=v.exports}}]);