(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1410:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"land-detector-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector-configuration"}},[e._v("#")]),e._v(" Land Detector Configuration")]),e._v(" "),a("p",[e._v("The land detector is a dynamic vehicle model representing key vehicle states from ground contact through to landed.\nThis topic explains the main parameters you may wish to tune in order to improve landing behaviour.")]),e._v(" "),a("h2",{attrs:{id:"auto-disarming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-disarming"}},[e._v("#")]),e._v(" Auto-Disarming")]),e._v(" "),a("p",[e._v("The land-detector automatically disarms the vehicle on landing.")]),e._v(" "),a("p",[e._v("You can set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[e._v("COM_DISARM_LAND")]),e._v(" to specify the number of seconds after landing that the system should disarm (or turn off auto-disarming by setting the parameter to -1).")],1),e._v(" "),a("h2",{attrs:{id:"multicopter-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-configuration"}},[e._v("#")]),e._v(" Multicopter Configuration")]),e._v(" "),a("p",[e._v("The complete set of relevant landing detector parameters are listed in the parameter reference with the prefix "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#land-detector"}},[e._v("LNDMC")]),e._v(" (these can be edited in QGroundControl via the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameter editor")]),e._v(").")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" Information about how the parameters affect landing can be found below in "),a("a",{attrs:{href:"#states"}},[e._v("Land Detector States")]),e._v(".")])]),e._v(" "),a("p",[e._v("Other key parameters that you may need to tune in order to improve landing behaviour on particular airframes are:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[e._v("MPC_THR_HOVER")]),e._v(" - the hover throttle of the system (default is 50%).\nIt is important to set this correctly as it makes altitude control more accurate and ensures correct land detection.\nA racer or a big camera drone without payload mounted might need a much lower setting (e.g. 35%).")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" Incorrectly setting "),a("code",[e._v("MPC_THR_HOVER")]),e._v(" may result in ground-contact or maybe-landed detection while still in air (in particular, while descending in "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v('). This causes the vehicle to "twitch" (turn down the motors, and then immediately turn them back up).')],1)])]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(" - the overall minimum throttle of the system.\nThis should be set to enable a controlled descent.")],1)])]),e._v(" "),a("h2",{attrs:{id:"fixed-wing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-configuration"}},[e._v("#")]),e._v(" Fixed Wing Configuration")]),e._v(" "),a("p",[e._v("The complete set of relevant parameters is available under the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#land-detector"}},[e._v("LNDFW")]),e._v(" prefix.\nThese two parameters are sometimes worth tuning:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[e._v("LNDFW_AIRSPD_MAX")]),e._v(" - the maximum airspeed allowed for the system still to be considered landed.\nThe default of 8 m/s is a reliable tradeoff between airspeed sensing accuracy and triggering fast enough.\nBetter airspeed sensors should allow lower values of this parameter.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[e._v("LNDFW_VEL_XY_MAX ")]),e._v(" - the maximum horizontal velocity for the system to be still be considered landed.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[e._v("LNDFW_VEL_Z_MAX")]),e._v(" - the maximum vertical velocity for the system to be still be considered landed.\nThis parameter can be adjusted to ensure land detection triggers earlier or later on throwing the airframe for hand-launches.")],1)]),e._v(" "),a("p",[a("span",{attrs:{id:"states"}})]),e._v(" "),a("h2",{attrs:{id:"land-detector-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector-states"}},[e._v("#")]),e._v(" Land Detector States")]),e._v(" "),a("h3",{attrs:{id:"multicopter-land-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-land-detection"}},[e._v("#")]),e._v(" Multicopter Land Detection")]),e._v(" "),a("p",[e._v("In order to detect landing, the multicopter first has to go through three different states, where each state contains the conditions from the previous states plus tighter constraints.\nIf a condition cannot be reached because of missing sensors, then the condition is true by default.\nFor instance, in "),a("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),e._v(" "),a("p",[e._v("In order to proceed to the next state, each condition has to be true for some predefined time.\nIf one condition fails, the land detector drops out of the current state immediately.")]),e._v(" "),a("h4",{attrs:{id:"ground-contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ground-contact"}},[e._v("#")]),e._v(" Ground Contact")]),e._v(" "),a("p",[e._v("This state is reached if following conditions are true for 0.35 seconds:")]),e._v(" "),a("ul",[a("li",[e._v("no vertical movement ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[e._v("LNDMC_Z_VEL_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("no horizontal movement ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[e._v("LNDMC_XY_VEL_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("lower thrust than "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(" + ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[e._v("MPC_THR_HOVER")]),e._v(" - "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(") * "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_LOW_T_THR"}},[e._v("LNDMC_LOW_T_THR")]),e._v(", or velocity setpoint is 0.9 of land speed but vehicle has no vertical movement.")],1)]),e._v(" "),a("p",[e._v("If the vehicle is in position- or velocity-control and ground contact was detected,\nthe position controller will set the thrust vector along the body x-y-axis to zero.")]),e._v(" "),a("h4",{attrs:{id:"maybe-landed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maybe-landed"}},[e._v("#")]),e._v(" Maybe Landed")]),e._v(" "),a("p",[e._v("This state is reached if following conditions are true for 0.25 seconds:")]),e._v(" "),a("ul",[a("li",[e._v("all conditions of ground contact are true")]),e._v(" "),a("li",[e._v("is not rotating ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[e._v("LNDMC_ROT_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("has low thrust "),a("code",[e._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")])])]),e._v(" "),a("p",[e._v("If the vehicle only has knowledge of thrust and angular rate,\nin order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),e._v(" "),a("p",[e._v("If the vehicle is in position or velocity control and maybe landed was detected,\nthe position controller will set the thrust vector to zero.")]),e._v(" "),a("h4",{attrs:{id:"landed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#landed"}},[e._v("#")]),e._v(" Landed")]),e._v(" "),a("p",[e._v("This state is reached if following conditions are true for 0.3 seconds:")]),e._v(" "),a("ul",[a("li",[e._v("all conditions of maybe landed are true")])])])}),[],!1,null,null,null);t.default=o.exports}}]);