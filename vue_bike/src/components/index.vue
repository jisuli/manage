<template>
 <div class="container">
    <header>
        <span class="back"><</span>
        <span class="name">购物车</span>
        <span></span>
    </header>
    <div class="login">
        <p>您还没有登录！登录后的购物车的商品将保存至您的账号中</p><button>登录</button>
    </div>
    <main>
        <item v-for="i in list" :itemkey="i" :fn="allPriceFn"></item>
    </main>
    <div class="cho">
        <h1><span class="all" :class="{allon:allControl}" @click="allChooseFn()"></span><span>全选</span></h1>
        <h2><span class="total">合计：<span class="money">￥{{allPrice}}</span></span><span></span><span>(不含运费)</span></h2>
        <h3 class="buy">结算({{allConte}})</h3>
    </div>
    <footer>
        <ul>
            <li>
                <span class="iconfont icon-home foot"></span>
                <p>首页</p>
            </li>
            <li>
                <span class="iconfont icon-xinfeng foot"></span>
                <p>分类</p>
            </li>

            <li>
                <span class="iconfont icon-search1 foot"></span>
                <p>购物车</p>
            </li>
            <li>
                <span class="iconfont icon-iconwode foot"></span>
                <p>我的</p>
            </li>
        </ul>
    </footer>
</div>
</template>

<script>
    import items from "./item.vue"
    export default {
        name: 'hello',
        data() {
            return {
                list: [],
                allPrice: 0,
                allConte: 0,
                allControl: false
            }
        },
        components: {
            item: items
        },
        computed: {
            // allPrice() {
            //     var allprice = 0
            //     this.list.forEach(function(i) {
            //         if (i.state) {
            //             allprice += i.price * i.num

            //         }
            //     });
            //     return allprice
            // },
            // allconte() {
            //     var allconte = 0
            //     this.list.forEach(function(i) {
            //         if (i.state) {
            //             allconte += i.num

            //         }
            //     });
            //     return allconte
            // }
        },
        methods: {
            allPriceFn() {
                var allprice = 0
                var allconte = 0
                this.list.forEach(function(i) {
                    if (i.state) {
                        allprice += i.price * i.num
                        allconte += i.num
                    }
                });
                this.allPrice = allprice
                this.allConte = allconte
            },
            allChooseFn() {
                var _this = this
                this.allControl = !this.allControl
                this.list.forEach(function(i) {
                    i.state = _this.allControl
                });
                this.allPriceFn()

            }
        },
        mounted() {

            var data = [{
                    id: 1,
                    name: "后街标配",
                    image: "/static/img/1.png",
                    addr: "北京",
                    state: true,
                    num: 1,
                    price: 1500,
                    size: "M",
                    color: "red"
                }, {
                    id: 2,
                    name: "后街舒适",
                    image: "/static/img/2.png",
                    addr: "北京",
                    state: true,
                    num: 1,
                    price: 2300,
                    size: "L",
                    color: "green"
                }, {
                    id: 3,
                    name: "后街豪华",
                    image: "/static/img/3.png",
                    addr: "北京",
                    state: false,
                    num: 1,
                    price: 3600,
                    size: "s",
                    color: "blue"
                }
            ]
            this.list = data
            this.allPriceFn()
            console.log(this)
            var _this = this
            this.$bus.$on("amendPrice", function() {
                _this.allPriceFn()
            })
            this.$bus.$on("del", function(id) {
                var arr = []
                _this.list.forEach(function(i, index) {
                    if (id != i.id) {
                        arr.push(i)
                    }
                });
                _this.list = arr
                _this.allPriceFn()
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>