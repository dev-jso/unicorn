console.log('hello');
new TypeIt('#example1', {
    speed: 50,
    autoStart: false
    })
    .type('باا')
    .pause(500)
    .delete(2)
    .type('یا, ')
    .pause(1000)
    .type('بیا بنویسیم رو درخت ...')
    .break()
    .pause(750)
    .type('روی آب رو پر پرنده رو ابرا')
    .options({speed: 700})
    .type('...')
    .pause(750)
    .options({speed: 50})
    .delete()
    .type('بیا بنویسیم که خدا <strong>ته قلب</strong>');
