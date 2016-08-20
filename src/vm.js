var vm = avalon.define({
    $id: 'test',
    aaa: '司徒正美',
    arr: [1,2,3],
    fn: function(){
        avalon.log('aaa')
    }
})

module.exports = vm