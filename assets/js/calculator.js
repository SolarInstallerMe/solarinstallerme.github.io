var states = [
  { name: "Alabama", costs: { r: 1067, c: 1022 } },
  { name: "Alaska", costs: { r: 1782, c: 1472 } },
  {
    name: "Arizona",
    costs: { r: 1130, c: 1003 },
    credit: { r: { percent: 10 } },
    utilities: [
      {
        name: "APS - Renewable Incentive Program",
        rebate: { r: { perKW: 3000 }, c: { perKW: 2500 } },
      },
      {
        name: "SRP - EarthWise Solar Energy Incentive Program",
        rebate: { r: { perKW: 2700 }, c: { perKW: 2250 } },
      },
      {
        name: "Sulphur Springs Valley EC - SunWatts Rebate Program",
        rebate: { perKW: 4000, percent: 50 },
      },
      {
        name: "TEP - Renewable Energy Credit Purchase Program",
        rebate: { r: { perKW: 2500 }, c: { perKW: 3000 } },
      },
      {
        name: "Trico Electric Cooperative - SunWatts Incentive Program",
        rebate: { perKW: 4000, percent: 50 },
      },
      {
        name: "UES - Renewable Energy Credit Purchase Program",
        rebate: { r: { perKW: 3000 }, c: { perKW: 2500 } },
      },
    ],
  },
  { name: "Arkansas", costs: { r: 981, c: 821 } },
  {
    name: "California",
    costs: { r: 1991, c: 2038 },
    rebate: { r: { perKW: 2500 }, c: { perKW: 3250 } },
    utilities: [
      {
        name: "Alameda Municipal Power - Solar Photovoltaics Rebate Program",
        rebate: { r: { perKW: 2600 } },
      },
      {
        name: "Anaheim Public Utilities - PV Buydown Program",
        rebate: { r: { perKW: 4000 }, c: { perKW: 2800 } },
      },
      {
        name: "Azusa Light & Water - Solar Partnership Program",
        rebate: { perKW: 4000 },
      },
      {
        name: "Banning Electric Department - Solar Support Program",
        rebate: { perKW: 3720 },
      },
      {
        name: "Burbank Water & Power - Residential & Commercial Solar Support Program",
        rebate: {
          r: { perKW: 3500 },
          c: { systemSize: [30, { perKW: 3500 }, { perKWH: 0.483 }] },
        },
      },
      {
        name: "City of Healdsburg - PV Incentive Program",
        rebate: { perKW: 2520 },
      },
      {
        name: "City of Lompoc Utilities - PV Rebate Program",
        rebate: { perKW: 3000 },
      },
      {
        name: "City of Palo Alto Utilities - PV Partners",
        rebate: { r: { perKW: 2000 }, c: { perKW: [100, 2600, 0, 2200] } },
      },
      {
        name: "Colton Public Utilities - PV Rebate Program",
        rebate: { perKW: 4000 },
      },
      {
        name: "Glendale Water and Power - Solar Solutions Program",
        rebate: { perKW: 3720 },
      },
      {
        name: "Hercules Municipal Utility - PV Rebate Program",
        rebate: { perKW: 3000, fixed: 10000 },
      },
      {
        name: "IID Energy - PV Solutions Rebate Program",
        rebate: { perKW: 2600 },
      },
      {
        name: "LADWP - Solar Incentive Program",
        rebate: { r: { perKWH: 2.5 }, c: { perKWH: 2.5 } },
      },
      {
        name: "Lodi Electric Utility - PV Rebate Program",
        rebate: { perKW: 2600 },
      },
      {
        name: "Merced Irrigation District - PV Buydown Program",
        rebate: {
          r: { perKW: 2800, fixed: 8000 },
          c: { perKW: 2800, fixed: 70000 },
        },
      },
      {
        name: "Modesto Irrigation District - Photovoltaic Rebate Program",
        rebate: {
          r: { perKW: 2600 },
          c: { systemSize: [30, { perKW: 2600 }, { perKWH: 0.233 }] },
        },
      },
      {
        name: "Pasadena Water and Power - Solar Power Installation Rebate",
        rebate: {
          r: { perKW: 3150 },
          c: { systemSize: [50, { perKW: 2000 }, { perKWH: 0.302 }] },
        },
      },
      {
        name: "Plumas-Sierra REC - PV Rebate Program",
        rebate: { r: { perKW: 2600, fixed: 6000 }, c: { perKW: 2600 } },
      },
      {
        name: "Redding Electric - Earth Advantage Rebate Program",
        rebate: { perKW: 2600 },
      },
      { name: "Riverside Public Utilities", rebate: { perKW: 3000 } },
      {
        name: "Roseville Electric - PV Buy Down Program",
        rebate: {
          r: { perKW: 3000, fixed: 10000 },
          c: { perKW: 3000, fixed: 66000 },
        },
      },
      {
        name: "San Diego Gas & Electric Company",
        rebate: { r: { perKW: 2500 }, c: { perKW: 3250 } },
      },
      {
        name: "Silicon Valley Power - Solar Electric Buy Down Program",
        rebate: { r: { perKW: 4500 }, c: { perKW: 3000 } },
      },
      {
        name: "SMUD - PV Buydown",
        rebate: { r: { perKW: 2200 }, c: { perKW: 1900 } },
      },
      {
        name: "Truckee Donner PUD - Photovoltaic Buy Down Program",
        rebate: {
          r: { perKW: 5000, fixed: 15000 },
          c: { perKW: 5000, fixed: 25000 },
        },
      },
      {
        name: "Turlock Irrigation District - PV Rebate",
        rebate: { r: { perKW: 4000 }, c: { perKW: 2800 } },
      },
      {
        name: "Ukiah Utilities - PV Buy-down Program",
        rebate: {
          r: { perKW: 2520, fixed: 6000 },
          c: { perKW: 2520, fixed: 15000 },
        },
      },
    ],
  },
  {
    name: "Colorado",
    costs: { r: 1042, c: 891 },
    utilities: [
      {
        name: "Black Hills Energy - On-Site Solar PV Rebate Program",
        rebate: { perKW: 2000 },
      },
      {
        name: "Colorado Springs Utilities - Renewable Energy Rebate Program",
        rebate: { perKW: 3750 },
      },
      { name: "Holy Cross Energy - WE CARE Rebates", rebate: { perKW: 2000 } },
      {
        name: "La Plata Electric Association - Renewable Generation Rebate Program",
        rebate: { perKW: 2000, fixed: 2000 },
      },
      { name: "Xcel Energy - Solar*Rewards Program", rebate: { perKW: 2000 } },
    ],
  },
  {
    name: "Connecticut",
    costs: { r: 2024, c: 1558 },
    rebate: { r: { perKW: 4000 } },
  },
  { name: "Delaware", costs: { r: 1449, c: 1205 }, rebate: { percent: 30 } },
  {
    name: "District of Columbia",
    costs: { r: 1425, c: 1417 },
    rebate: { perKW: [3, 3000, 7, 2000] },
  },
  {
    name: "Florida",
    costs: { r: 1234, c: 1070 },
    rebate: { perKW: 4000 },
    utilities: [
      {
        name: "Gainesville Regional Utilities - Solar-Electric (PV) System Rebate Program",
        rebate: {
          r: { perKW: 1500, fixed: 7500 },
          c: { perKW: 1500, fixed: 37500 },
        },
      },
    ],
  },
  {
    name: "Georgia",
    costs: { r: 1089, c: 914 },
    credit: { r: { percent: 35 }, c: { percent: 35 } },
    utilities: [
      {
        name: "Central Georgia EMC - Photovoltaic Rebate Program",
        rebate: { perKW: 450, fixed: 4500 },
      },
      {
        name: "Georgia Power - Solar Buyback Program",
        rebate: { perKWH: 0.17 },
      },
      {
        name: "GreyStone Power - Photovoltaic Rebate Program",
        rebate: { perKW: 450, fixed: 4500 },
      },
      {
        name: "Jackson EMC - Right Choice Sun Power Rebate Program",
        rebate: { perKW: 450, fixed: 4500 },
      },
      {
        name: "Sawnee EMC - Solar Photovoltaic Rebate Program",
        rebate: { perKW: 300, fixed: 3000 },
      },
    ],
  },
  {
    name: "Hawaii",
    costs: { r: 2299, c: 2074 },
    credit: { r: { percent: 35 }, c: { percent: 35 } },
  },
  { name: "Idaho", costs: { r: 844, c: 692 } },
  { name: "Illinois", costs: { r: 1098, c: 824 }, rebate: { percent: 30 } },
  { name: "Indiana", costs: { r: 946, c: 826 } },
  {
    name: "Iowa",
    costs: { r: 1116, c: 892 },
    utilities: [
      {
        name: "Farmers Electric Cooperative (Kalona) - Renewable Energy Rebates",
        rebate: { perKW: 1000, fixed: 5000 },
      },
      {
        name: "Independence Light & Power - Renewable Energy Rebates",
        rebate: { perKWH: 2.5, fixed: 10000 },
      },
      {
        name: "Maquoketa Municipal Electric Utility - Renewable Energy Rebates",
        rebate: { perKWH: 2.5, fixed: 10000 },
      },
      {
        name: "Preston Municipal Electric Utility - Renewable Energy Rebates",
        rebate: { perKWH: 2.5, fixed: 10000 },
      },
    ],
  },
  { name: "Kansas", costs: { r: 1009, c: 842 } },
  {
    name: "Kentucky",
    costs: { r: 858, c: 795 },
    credit: { r: { fixed: 500 }, c: { fixed: 1000 } },
  },
  {
    name: "Louisiana",
    costs: { r: 824, c: 759 },
    credit: { r: { percent: 50 }, c: { percent: 50 } },
  },
  { name: "Maine", costs: { r: 1519, c: 1216 }, rebate: { fixed: 2000 } },
  {
    name: "Maryland",
    costs: { r: 1595, c: 1210 },
    rebate: { perKW: [4, 1250, 4, 1000, 2, 500] },
  },
  {
    name: "Massachusetts",
    costs: { r: 1663, c: 1867 },
    credit: { r: { percent: 15 } },
    rebate: { r: { perKW: 1000 }, c: { perKW: 3150 } },
    utilities: [
      {
        name: "Chicopee Electric Light - Solar Rebate Program",
        rebate: { perKW: 2500, fixed: 5000 },
      },
      {
        name: "Marblehead Municipal Light Department - Solar Rebate Program",
        rebate: { r: { perKW: 1000 } },
      },
    ],
  },
  {
    name: "Michigan",
    costs: { r: 1229, c: 1000 },
    utilities: [
      {
        name: "WPPI Energy - Renewable Energy Rebates (offered by seven MI utilities)",
        rebate: { perKWH: 2.5, fixed: 10000 },
      },
    ],
  },
  {
    name: "Minnesota",
    costs: { r: 1050, c: 854 },
    rebate: { perKW: 2250 },
    utilities: [
      {
        name: "Great River Energy (28 Member Cooperatives) - Solar-Electric (PV) Rebate Program",
        rebate: { perKW: 2000, fixed: 4000 },
      },
      {
        name: "Minnesota Power - Solar-Electric (PV) Rebate Program",
        rebate: { perKW: 2000, fixed: 4000 },
      },
    ],
  },
  { name: "Mississippi", costs: { r: 1004, c: 933 } },
  {
    name: "Missouri",
    costs: { r: 966, c: 813 },
    utilities: [
      {
        name: "Columbia Water & Light - Solar & Efficiency Rebates",
        rebate: { perKW: 500, fixed: 500 },
      },
    ],
  },
  {
    name: "Montana",
    costs: { r: 946, c: 932 },
    credit: { r: { percent: 35 }, c: { percent: 35 } },
  },
  { name: "Nebraska", costs: { r: 990, c: 801 } },
  { name: "Nevada", costs: { r: 1288, c: 1059 }, rebate: { perKW: 2100 } },
  {
    name: "New Hampshire",
    costs: { r: 1641, c: 1531 },
    rebate: { perKW: 3000, fixed: 6000 },
    utilities: [
      {
        name: "New Hampshire Electric Co-Op - Solar and Wind Energy Rebate Program",
        rebate: { perKW: 3000, fixed: 3500 },
      },
    ],
  },
  {
    name: "New Jersey",
    costs: { r: 1783, c: 1604 },
    rebate: { r: { perKW: 1550 }, c: { perKW: 1000 } },
  },
  {
    name: "New Mexico",
    costs: { r: 1072, c: 872 },
    credit: { r: { percent: 25 }, c: { percent: 10 } },
  },
  {
    name: "New York",
    costs: { r: 1974, c: 1672 },
    credit: { r: { percent: 25 } },
    rebate: {
      r: { perKW: [4, 3000, 4, 2000] },
      c: { perKW: [40, 3000, 40, 2000] },
    },
    utilities: [
      {
        name: "Long Island Power Authority - Solar Rebate Program",
        rebate: {
          r: { perKW: 3500 },
          c: { perKW: [10, 3500, 40, 1500, 50, 1000] },
        },
      },
    ],
  },
  {
    name: "North Carolina",
    costs: { r: 1040, c: 825 },
    credit: { r: { percent: 35 }, c: { percent: 35 } },
  },
  {
    name: "North Dakota",
    costs: { r: 886, c: 712 },
    credit: { r: { percent: 15 }, c: { percent: 15 } },
  },
  { name: "Ohio", costs: { r: 1151, c: 989 } },
  { name: "Oklahoma", costs: { r: 879, c: 778 } },
  {
    name: "Oregon",
    costs: { r: 907, c: 760 },
    credit: { r: { perKW: 3000 }, c: { percent: 50 } },
    rebate: { r: { perKW: 2000 }, c: { perKW: 1500 } },
    utilities: [
      {
        name: "Ashland Electric Utility - Photovoltaic Rebate Program",
        rebate: {
          r: { perKW: 2250, fixed: 10000 },
          c: { perKW: 1000, fixed: 10000 },
        },
      },
      {
        name: "Consumers Power Inc. - Solar Energy System Rebate",
        rebate: { perKW: 500 },
      },
      {
        name: "EWEB - Solar Electric Program (Rebate)",
        rebate: {
          r: { perKW: 2000, fixed: 10000 },
          c: { perKW: 1000, fixed: 25000 },
        },
      },
    ],
  },
  { name: "Pennsylvania", costs: { r: 1246, c: 970 }, rebate: { perKW: 2250 } },
  {
    name: "Rhode Island",
    costs: { r: 1455, c: 1301 },
    credit: { r: { percent: 25 }, c: { percent: 25 } },
  },
  {
    name: "South Carolina",
    costs: { r: 1039, c: 884 },
    credit: { r: { percent: 25 }, c: { percent: 25 } },
  },
  { name: "South Dakota", costs: { r: 927, c: 722 } },
  { name: "Tennessee", costs: { r: 897, c: 916 } },
  {
    name: "Texas",
    costs: { r: 1268, c: 972 },
    utilities: [
      {
        name: "Austin Energy - Solar PV Rebate Program",
        rebate: { perKW: 3750 },
      },
      {
        name: "Bryan Texas Utilities - Solar PV Rebate Program",
        rebate: { perKW: 4000, fixed: 12000 },
      },
      { name: "CPS Energy - Solar PV Rebate Program", rebate: { perKW: 3000 } },
      {
        name: "Entergy Texas - Solar PV Pilot Program",
        rebate: { perKW: 2500 },
      },
      {
        name: "Guadalupe Valley Electric Cooperative - Renewable Energy Rebates",
        rebate: { perKW: 2000, fixed: 8000 },
      },
      {
        name: "Oncor Electric Delivery - PV Incentive Program",
        rebate: { perKW: 2460 },
      },
      {
        name: "Texas New Mexico Power Company - Solar PV Pilot Program",
        rebate: { r: { perKW: 2500 }, c: { perKW: 2500, fixed: 25000 } },
      },
    ],
  },
  {
    name: "Utah",
    costs: { r: 911, c: 750 },
    credit: { r: { percent: 25 }, c: { percent: 10 } },
    utilities: [
      {
        name: "City of St. George - Solar and Wind Rebate Program",
        rebate: {
          r: { perKW: 2000, fixed: 6000 },
          c: { perKW: 2000, fixed: 20000 },
        },
      },
      {
        name: "Logan City Light and Power - PV Rebate Program",
        rebate: {
          r: { perKW: 2000, fixed: 6000 },
          c: { perKW: 2000, fixed: 30000 },
        },
      },
      {
        name: "Rocky Mountain Power - Solar Incentive Program",
        rebate: {
          r: { perKW: 2000, fixed: 6000 },
          c: { perKW: 2000, fixed: 30000 },
        },
      },
      {
        name: "Washington City - PV Rebate Program",
        rebate: {
          r: { perKW: 2000, fixed: 6000 },
          c: { perKW: 2000, fixed: 20000 },
        },
      },
    ],
  },
  {
    name: "Vermont",
    costs: { r: 1505, c: 1293 },
    credit: { c: { percent: 30 } },
    rebate: { perKW: 1750 },
  },
  { name: "Virginia", costs: { r: 1111, c: 790 } },
  {
    name: "Washington",
    costs: { r: 793, c: 693 },
    utilities: [
      {
        name: "Clallam County PUD - Residential Solar & Efficiency Rebate Program",
        rebate: { perKW: 500 },
      },
      {
        name: "Franklin County PUD - Solar Energy System Rebate",
        rebate: { perKW: 500 },
      },
      {
        name: "Klickitat PUD - Solar PV Rebate",
        rebate: { perKW: 400, fixed: 1200 },
      },
      {
        name: "Orcas Power & Light - Photovoltaic Rebate",
        rebate: { perKW: 1500, fixed: 4500 },
      },
      {
        name: "Port Angeles Public Works & Utilities - Solar Energy System Rebate",
        rebate: { perKW: 500 },
      },
      {
        name: "Richland Energy Services - Residential Solar Power Rebate Program",
        rebate: { perKW: 500, fixed: 2500 },
      },
      {
        name: "Snohomish County PUD No 1 - Solar Express Rebate Program",
        rebate: {
          r: { perKW: 500, fixed: 2500 },
          c: { perKW: 500, fixed: 10000 },
        },
      },
    ],
  },
  {
    name: "West Virginia",
    costs: { r: 787, c: 649 },
    credit: { r: { percent: 30 } },
  },
  {
    name: "Wisconsin",
    costs: { r: 1198, c: 981 },
    rebate: { percent: 25 },
    utilities: [
      {
        name: "We Energies - Solar Electric (PV) Incentive Program",
        rebate: { perKWH: 0.75 },
      },
    ],
  },
  {
    name: "Wyoming",
    costs: { r: 907, c: 750 },
    rebate: { percent: 50, fixed: 3000 },
  },
];
var interface =
  '<style type="text/css">#calcTable {width:auto;border:none;background:white;font-family:\'Verdana\';font-size:12px;font-weight:bold;empty-cells:show;border-collapse:collapse;}#calcTable .inputTop {height:5px;overflow:hidden;padding:0;margin:0;border:none;border-bottom:1px solid #aaa;}#calcTable .inputBottom {height:10px;overflow:hidden;padding:0;margin:0;border:1px solid #aaa;border-top:none;}#calcTable .inputButton {border:none;text-align:right;padding-top:5px;}#calcTable .inputButton input {font-weight:bold;color:#fff;background:#0c0;padding:3px 5px 3px 5px;border:3px solid #0c0;}#calcTable .inputButton input:hover {border:3px outset #0e0;}#calcTable .inputButton input:active {border:3px inset #0e0;}#calcTable .title {background-color:#ff0;font-size:16px;padding:8px;color:#390;border:none;}#calcTable .typeCell, #calcTable .billCell {border-left:1px solid #aaa;text-align:center;}#calcTable td {padding:20px 2px 5px 2px;border-right:1px solid #aaa;}#calcTable th {padding:20px 2px 5px 2px;border-left:1px solid #aaa;text-align:right;}#calcTable tr.out th, #calcTable tr.out td  {text-align:left;border:none;border-top:1px solid #6382bf;padding:8px;}#calcTable tr.out td {text-align:right;}#calcTable tr.out td.col {text-align:center;}#calcTable tr.hd th, #calcTable tr.hd td {border:none;font-size:14px;padding-top:15px;}#calcTable tr.hd th {color:#990;}#calcTable tr.res th, #calcTable tr.res td {font-size:16px;border:none;background:#9cf;}#calcTable tr.out td.outSpacer {padding:0;margin:0;height:10px;overflow:hidden;}#calcTable .outputButton {border:none;text-align:right;padding-top:5px;}#calcTable .outputButton input {font-weight:bold;color:#3c0;background:#fff;padding:3px 5px 3px 5px;border:3px solid #ddd;}#calcTable .outputButton input:hover {border:3px outset #ccc;}#calcTable .outputButton input:active {border:3px inset #ccc;}#calcTable .out {display:none;}</style><table id=calcTable cellspacing=0 cellpadding=0><tr><td colspan=3 class=title>Solar Savings Estimator</td></tr><tr class=in><td colspan=3 class=inputTop></td></tr><tr class=in><th>State:</th><td colspan=2 width=auto><select name=state id=state></select></td></tr><tr class="in ut"><th>Utility:</th><td colspan=2><select name=utility id=utility></select></td></tr><tr class=in><td colspan=3 class=typeCell><input type=radio name=type id=typeR value="r" /> <label for=typeR>Residential</label> &nbsp; &nbsp; <input type=radio name=type id=typeC value="c" /> <label for=typeC>Commercial</label></td></tr><tr class=in><td colspan=3 class=billCell>Monthly Electric Bill: <input type=text name=monthly id=monthly size=10 /></td></tr><tr class=in><td colspan=3 class=inputBottom></td></tr><tr class=in><td colspan=3 class=inputButton><input type=button id=submitBtn value="Submit" /></td></tr><tr class="out hd"><th colspan=3>What it costs</th></tr><tr class=out><th colspan=2>Retail Price</th><td id=outPrice></td></tr><tr class="out rebate"><th colspan=2 id=outRebateTitle>State Rebates</th><td id=outRebate></td></tr><tr class=out><th colspan=2>Federal Tax Credits</th><td>30%</td></tr><tr class="out credit"><th colspan=2>State Tax Credits</th><td id=outCredit></td></tr><tr class=out><td colspan=3 class=outSpacer></td></tr><tr class="out res"><th colspan=2>Final System Cost</th><td id=outFinalCost></td></tr><tr class="out hd"><th>What You Save</th><td class=col>Monthly</td><td class=col>Annually</td></tr><tr class=out><th>Bill Savings</th><td class=col id=outSaving1></td><td class=col id=outSaving2></td></tr><tr class="out res"><th>Bill Reduced By</th><td class=col>75%</td><td class=col>75%</td></tr><tr class=out><td colspan=3 class=outputButton><input type=button id=backBtn value="&lt;&lt; Back" /></td></tr></table>';
document.write(interface);
jQuery(function ($) {
  var stateSelect = $("#calcTable #state");
  var utilSelect = $("#calcTable #utility");
  var utilRow = $("#calcTable tr.ut").hide();
  stateSelect.append(
    $("<option />").html(" - Select One - ").attr("value", -1)
  );
  for (var i = 0; i < states.length; i++) {
    stateSelect.append($("<option />").html(states[i].name).attr("value", i));
  }
  $("#calcTable #typeR").attr("checked", "checked");
  var currState = -1;
  function updateUtils() {
    newState = stateSelect.val();
    if (newState == -1 || states[newState]["utilities"] == undefined) {
      utilRow.hide();
    } else if (newState != currState) {
      utilSelect.empty();
      utilSelect.append(
        $("<option />").html(" - Select One - ").attr("value", -1)
      );
      for (var i = 0; i < states[newState]["utilities"].length; i++) {
        utilSelect.append(
          $("<option />")
            .html(states[newState]["utilities"][i].name)
            .attr("value", i)
        );
      }
      utilSelect.append($("<option />").html("Other").attr("value", -2));
      utilSelect.width(Math.round(stateSelect.closest("td").width() * 0.95));
      utilRow.show();
    }
    currState = newState;
  }
  stateSelect.change(updateUtils).keyup(updateUtils);
  function formatDollars(val) {
    val = Math.round(val * 100).toString();
    while (val.length < 3) val = "0" + val;
    var pos = val.length - 2;
    val = val.slice(0, pos) + "." + val.slice(pos);
    pos = pos - 3;
    while (pos > 0) {
      val = val.slice(0, pos) + "," + val.slice(pos);
      pos = pos - 3;
    }
    return "$" + val;
  }
  function getStateTaxCredit(state, type, cost, kw, kwh) {
    var c = states[state]["credit"];
    if (c === undefined) return "";
    if (c[type] !== undefined) c = c[type];
    else if (c["r"] !== undefined || c["c"] !== undefined) return "";
    if (c["percent"] !== undefined) return c["percent"] + "%";
    if (c["perKW"] !== undefined)
      return formatDollars(c["perKW"] / 1000) + " / Watt";
    if (c["fixed"] !== undefined) return formatDollars(c["fixed"]);
    return "";
  }
  function getRebateValue(r, cost, kw, kwh) {
    var rebate = 0;
    if (r["percent"] !== undefined) {
      var v = (cost * r["percent"]) / 100;
      if (rebate == 0 || v < rebate) rebate = v;
    }
    if (r["perKW"] !== undefined) {
      if (typeof r["perKW"] != "object") {
        r["perKW"] = [0, r["perKW"]];
      }
      var checked = 0;
      var v = 0;
      for (var i = 0; i < r["perKW"].length / 2; i++) {
        var amt = r["perKW"][i * 2];
        if (amt == 0) amt = kw + 1;
        var per = r["perKW"][i * 2 + 1];
        if (kw - checked > 0) v = v + per * Math.min(amt, kw - checked);
        checked = checked + amt;
      }
      if (rebate == 0 || v < rebate) rebate = v;
    }
    if (r["perKWH"] !== undefined) {
      var v = kwh * r["perKWH"];
      if (rebate == 0 || v < rebate) rebate = v;
    }
    if (r["fixed"] !== undefined) {
      if (rebate == 0 || r["fixed"] < rebate) rebate = r["fixed"];
    }
    if (r["systemSize"] !== undefined) {
      var v = 0;
      if (kw < r["systemSize"][0])
        v = getRebateValue(r["systemSize"][1], cost, kw, kwh);
      else v = getRebateValue(r["systemSize"][2], cost, kw, kwh);
      if (rebate == 0 || v < rebate) rebate = v;
    }
    return Math.round(rebate * 100) / 100;
  }
  $("#calcTable #submitBtn").click(function () {
    if (currState == -1) {
      alert("Please select a state.");
      return;
    }
    if (
      states[currState]["utilities"] !== undefined &&
      utilSelect.val() == -1
    ) {
      alert("Please select a utility.");
      return;
    }
    if (states[currState]["utilities"] === undefined) currUtil = -2;
    else currUtil = utilSelect.val();
    var type = $("#calcTable .typeCell input:checked").val();
    if (type === undefined) {
      alert("Please select either residential or commercial.");
      return;
    }
    var monthly = $("#calcTable #monthly").val();
    monthly = parseFloat(monthly.replace(/[\$, ]/g, ""));
    if (isNaN(monthly) || monthly <= 0) {
      alert("Please enter your monthly electric bill.");
      return;
    } else {
      $("#calcTable #monthly").val("$ " + monthly);
    }
    var kwh = (monthly * 7500) / states[currState]["costs"][type];
    var kw = kwh * 0.0072;
    kwh = kwh * 12;
    var cost = kw * 6055;
    cost = Math.round(cost * 100) / 100;
    $("#calcTable #outPrice").html(formatDollars(cost));
    var rebateInfo = undefined;
    if (currUtil >= 0) {
      var r = states[currState]["utilities"][currUtil]["rebate"];
      if (r == undefined) currUtil = -2;
      else if (r[type] !== undefined) r = r[type];
      else if (r["r"] !== undefined || r["c"] !== undefined) currUtil = -2;
      if (currUtil >= 0) rebateInfo = r;
    }
    if (currUtil < 0) {
      var r = states[currState]["rebate"];
      if (r !== undefined) {
        if (r[type] !== undefined) rebateInfo = r[type];
        else if (r["r"] === undefined && r["c"] === undefined) rebateInfo = r;
      }
    }
    var rebate = 0;
    if (rebateInfo !== undefined)
      rebate = getRebateValue(rebateInfo, cost, kw, kwh);
    $("#calcTable #outRebate").html(formatDollars(rebate));
    var credit = getStateTaxCredit(currState, type, cost, kw, kwh);
    if (credit != "") $("#calcTable #outCredit").html(credit);
    $("#calcTable #outFinalCost").html(formatDollars(cost - rebate));
    var savings = Math.round(monthly * 75) / 100;
    $("#calcTable #outSaving1").html(formatDollars(savings));
    $("#calcTable #outSaving2").html(formatDollars(savings * 12));
    $("#calcTable .in").hide();
    $("#calcTable .out").show();
    if (credit == "") $("#calcTable .credit").hide();
    if (rebate == 0) $("#calcTable .rebate").hide();
  });
  $("#calcTable #backBtn").click(function () {
    $("#calcTable .out").hide();
    $("#calcTable .in").show();
    updateUtils();
  });
});
