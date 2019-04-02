const tape = require("tape"),
      d3 = require("../");

tape("quad.domain(domain) sets the domain explicitly", function(test) {
  const r = d3.regressionQuad().domain([0, 50]);
  test.deepEqual(r.domain(), [0, 50]);
  test.end();
});

tape("quad(data) calculates the the a, b, and c coefficients, R^2, and returns a line representing the regression", function(test) {
  const data = [{x: -3, y: 7.5}, {x: -2, y: 3}, {x: -1, y: 0.5}, {x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 6}, {x: 3, y: 14}]
  const r = d3.regressionQuad()
    .x(d => d.x)
    .y(d => d.y)
    .domain([-4, 4])
    (data);
  
  test.equal(r.a.toFixed(3), "1.107");
  test.equal(r.b, 1);
  test.equal(r.c.toFixed(3), "0.571");
  test.equal(r.rSquared.toFixed(3), "0.988");

  [[-4,14.285714285714286],[-3.75,12.390625],[-3.5,10.633928571428571],[-3.25,9.015625],[-3.125,8.258370535714286],[-3,7.5357142857142865],[-2.875,6.84765625],[-2.75,6.194196428571429],[-2.625,5.575334821428571],[-2.5,4.991071428571429],[-2.375,4.44140625],[-2.3125,4.179547991071429],[-2.25,3.9263392857142856],[-2.1875,3.681780133928571],[-2.125,3.4458705357142856],[-2.0625,3.218610491071429],[-2,3],[-1.9375,2.7900390625],[-1.875,2.5887276785714284],[-1.8125,2.3960658482142856],[-1.78125,2.302978515625],[-1.75,2.212053571428571],[-1.71875,2.123291015625],[-1.6875,2.0366908482142856],[-1.65625,1.9522530691964284],[-1.625,1.8699776785714284],[-1.59375,1.7898646763392856],[-1.5625,1.7119140625],[-1.53125,1.6361258370535712],[-1.5,1.5625],[-1.46875,1.4910365513392856],[-1.4375,1.4217354910714284],[-1.40625,1.3545968191964284],[-1.375,1.2896205357142856],[-1.34375,1.2268066406249998],[-1.328125,1.1962105887276784],[-1.3125,1.1661551339285712],[-1.296875,1.1366402762276784],[-1.28125,1.1076660156249998],[-1.265625,1.0792323521205356],[-1.25,1.0513392857142856],[-1.234375,1.0239868164062498],[-1.21875,0.9971749441964284],[-1.203125,0.9709036690848212],[-1.1875,0.9451729910714284],[-1.171875,0.9199829101562498],[-1.15625,0.8953334263392856],[-1.140625,0.8712245396205356],[-1.125,0.8476562499999998],[-1.109375,0.8246285574776784],[-1.09375,0.8021414620535712],[-1.078125,0.7801949637276784],[-1.0625,0.7587890624999998],[-1.046875,0.7379237583705356],[-1.03125,0.7175990513392856],[-1.015625,0.6978149414062498],[-1,0.6785714285714284],[-0.9921875,0.6691523960658481],[-0.984375,0.6598685128348212],[-0.9765625,0.6507197788783481],[-0.96875,0.6417061941964284],[-0.9609375,0.6328277587890623],[-0.953125,0.6240844726562498],[-0.9453125,0.6154763357979909],[-0.9375,0.6070033482142855],[-0.9296875,0.5986655099051337],[-0.921875,0.5904628208705355],[-0.9140625,0.5823952811104909],[-0.90625,0.5744628906249998],[-0.8984375,0.5666656494140623],[-0.890625,0.5590035574776784],[-0.8828125,0.551476614815848],[-0.875,0.5440848214285712],[-0.8671875,0.536828177315848],[-0.859375,0.5297066824776784],[-0.8515625,0.5227203369140623],[-0.84375,0.5158691406249998],[-0.8359375,0.5091530936104909],[-0.828125,0.5025721958705355],[-0.8203125,0.4961264474051337],[-0.8125,0.4898158482142855],[-0.8046875,0.4836403982979909],[-0.796875,0.4776000976562498],[-0.7890625,0.4716949462890623],[-0.78125,0.4659249441964284],[-0.7734375,0.460290091378348],[-0.765625,0.4547903878348212],[-0.7578125,0.449425833565848],[-0.75,0.4441964285714284],[-0.7421875,0.4391021728515623],[-0.734375,0.4341430664062498],[-0.7265625,0.4293191092354909],[-0.71875,0.4246303013392855],[-0.7109375,0.4200766427176337],[-0.703125,0.4156581333705355],[-0.6953125,0.4113747732979909],[-0.6875,0.4072265624999998],[-0.6796875,0.4032135009765623],[-0.671875,0.3993355887276783],[-0.66796875,0.39744731358119395],[-0.6640625,0.395592825753348],[-0.66015625,0.3937721252441404],[-0.65625,0.3919852120535712],[-0.65234375,0.3902320861816404],[-0.6484375,0.388512747628348],[-0.64453125,0.38682719639369395],[-0.640625,0.3851754324776783],[-0.63671875,0.3835574558803011],[-0.6328125,0.3819732666015623],[-0.62890625,0.3804228646414618],[-0.625,0.3789062499999998],[-0.62109375,0.3774234226771761],[-0.6171875,0.3759743826729908],[-0.61328125,0.37455912998744395],[-0.609375,0.3731776646205355],[-0.60546875,0.3718299865722654],[-0.6015625,0.3705160958426337],[-0.59765625,0.3692359924316404],[-0.59375,0.3679896763392855],[-0.58984375,0.36677714756556895],[-0.5859375,0.3655984061104908],[-0.58203125,0.3644534519740511],[-0.578125,0.3633422851562498],[-0.57421875,0.3622649056570868],[-0.5703125,0.3612213134765623],[-0.56640625,0.3602115086146761],[-0.5625,0.3592354910714283],[-0.55859375,0.35829326084681895],[-0.5546875,0.357384817940848],[-0.55078125,0.3565101623535154],[-0.546875,0.3556692940848212],[-0.54296875,0.3548622131347654],[-0.5390625,0.354088919503348],[-0.53515625,0.35334941319056895],[-0.53125,0.3526436941964283],[-0.52734375,0.3519717625209261],[-0.5234375,0.3513336181640623],[-0.51953125,0.3507292611258368],[-0.515625,0.3501586914062498],[-0.51171875,0.3496219090053011],[-0.5078125,0.3491189139229908],[-0.50390625,0.34864970615931895],[-0.5,0.3482142857142855],[-0.49609375,0.3478126525878904],[-0.4921875,0.3474448067801337],[-0.48828125,0.3471107482910154],[-0.484375,0.3468104771205355],[-0.48046875,0.34654399326869395],[-0.4765625,0.3463112967354908],[-0.47265625,0.3461123875209261],[-0.46875,0.3459472656249998],[-0.46484375,0.3458159310477118],[-0.4609375,0.3457183837890623],[-0.45703125,0.3456546238490511],[-0.453125,0.3456246512276783],[-0.44921875,0.34562846592494395],[-0.4453125,0.345666067940848],[-0.44140625,0.3457374572753904],[-0.4375,0.3458426339285712],[-0.43359375,0.3459815979003904],[-0.4296875,0.346154349190848],[-0.42578125,0.34636088779994395],[-0.421875,0.3466012137276783],[-0.41796875,0.3468753269740511],[-0.4140625,0.3471832275390623],[-0.41015625,0.3475249154227118],[-0.40625,0.3479003906249998],[-0.40234375,0.3483096531459261],[-0.3984375,0.3487527029854908],[-0.39453125,0.34922954014369395],[-0.390625,0.3497401646205355],[-0.38671875,0.3502845764160154],[-0.3828125,0.3508627755301337],[-0.37890625,0.3514747619628904],[-0.375,0.3521205357142855],[-0.37109375,0.35280009678431895],[-0.3671875,0.3535134451729908],[-0.36328125,0.3542605808803011],[-0.359375,0.3550415039062498],[-0.35546875,0.3558562142508368],[-0.3515625,0.3567047119140623],[-0.34765625,0.3575869968959261],[-0.34375,0.3585030691964283],[-0.33984375,0.35945292881556895],[-0.3359375,0.360436575753348],[-0.33203125,0.3614540100097654],[-0.328125,0.3625052315848212],[-0.32421875,0.3635902404785154],[-0.3203125,0.364709036690848],[-0.31640625,0.36586162022181895],[-0.3125,0.3670479910714283],[-0.30859375,0.3682681492396761],[-0.3046875,0.3695220947265623],[-0.30078125,0.3708098275320868],[-0.296875,0.3721313476562498],[-0.29296875,0.3734866550990511],[-0.2890625,0.3748757498604908],[-0.28515625,0.37629863194056895],[-0.28125,0.3777553013392855],[-0.27734375,0.3792457580566404],[-0.2734375,0.3807700020926337],[-0.26953125,0.3823280334472654],[-0.265625,0.3839198521205355],[-0.26171875,0.38554545811244395],[-0.2578125,0.3872048514229908],[-0.25390625,0.3888980320521761],[-0.25,0.3906249999999998],[-0.24609375,0.3923857552664618],[-0.2421875,0.3941802978515623],[-0.23828125,0.3960086277553011],[-0.234375,0.3978707449776783],[-0.23046875,0.39976664951869395],[-0.2265625,0.401696341378348],[-0.21875,0.4056570870535712],[-0.2109375,0.409752982003348],[-0.203125,0.4139840262276783],[-0.1953125,0.4183502197265623],[-0.1875,0.4228515624999998],[-0.1796875,0.4274880545479908],[-0.171875,0.4322596958705355],[-0.1640625,0.4371664864676337],[-0.15625,0.4422084263392855],[-0.1484375,0.4473855154854908],[-0.140625,0.4526977539062498],[-0.1328125,0.4581451416015623],[-0.125,0.4637276785714283],[-0.1171875,0.469445364815848],[-0.109375,0.4752982003348212],[-0.1015625,0.481286185128348],[-0.09375,0.4874093191964283],[-0.0859375,0.4936676025390623],[-0.078125,0.5000610351562498],[-0.0703125,0.5065896170479908],[-0.0625,0.5132533482142855],[-0.0546875,0.5200522286551337],[-0.046875,0.5269862583705355],[-0.0390625,0.5340554373604908],[-0.03125,0.5412597656249998],[-0.0234375,0.5485992431640623],[-0.015625,0.5560738699776783],[-0.0078125,0.563683646065848],[0,0.5714285714285712],[0.0078125,0.579308646065848],[0.015625,0.5873238699776783],[0.0234375,0.5954742431640623],[0.03125,0.6037597656249998],[0.0390625,0.6121804373604908],[0.046875,0.6207362583705355],[0.0546875,0.6294272286551337],[0.0625,0.6382533482142855],[0.0703125,0.6472146170479908],[0.078125,0.6563110351562498],[0.0859375,0.6655426025390623],[0.09375,0.6749093191964284],[0.109375,0.6940482003348212],[0.125,0.7137276785714284],[0.140625,0.7339477539062498],[0.15625,0.7547084263392855],[0.171875,0.7760096958705355],[0.1875,0.7978515624999998],[0.203125,0.8202340262276784],[0.21875,0.8431570870535712],[0.234375,0.8666207449776784],[0.25,0.8906249999999998],[0.265625,0.9151698521205355],[0.28125,0.9402553013392855],[0.296875,0.9658813476562498],[0.3125,0.9920479910714284],[0.328125,1.0187552315848212],[0.34375,1.0460030691964284],[0.359375,1.0737915039062498],[0.375,1.1021205357142856],[0.390625,1.1309901646205356],[0.40625,1.1604003906249998],[0.421875,1.1903512137276784],[0.4375,1.2208426339285712],[0.46875,1.2834472656249998],[0.5,1.3482142857142856],[0.53125,1.4151436941964284],[0.5625,1.4842354910714284],[0.59375,1.5554896763392856],[0.625,1.6289062499999998],[0.65625,1.7044852120535712],[0.6875,1.7822265624999998],[0.71875,1.8621303013392856],[0.75,1.9441964285714284],[0.78125,2.0284249441964284],[0.8125,2.1148158482142856],[0.84375,2.203369140625],[0.875,2.294084821428571],[0.9375,2.4820033482142856],[1,2.6785714285714284],[1.0625,2.8837890625],[1.125,3.09765625],[1.1875,3.3201729910714284],[1.25,3.5513392857142856],[1.3125,3.791155133928571],[1.375,4.039620535714286],[1.4375,4.296735491071429],[1.5,4.5625],[1.625,5.119977678571429],[1.75,5.712053571428571],[1.875,6.338727678571429],[2,7],[2.125,7.695870535714286],[2.25,8.426339285714285],[2.375,9.19140625],[2.5,9.991071428571429],[2.75,11.694196428571429],[3,13.535714285714286],[3.25,15.515625],[3.5,17.63392857142857],[4,22.285714285714285]]
  .forEach((p, i) => {
    test.deepEqual(r[i], p);
  });

  test.end();
});