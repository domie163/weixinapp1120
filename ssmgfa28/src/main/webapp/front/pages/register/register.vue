<template>
<view class="content">
	<view class="box" :style='{"padding":"48rpx","boxShadow":"0 2rpx 12rpx #FFF","margin":"80rpx auto","borderColor":"rgba(234, 244, 246, 1)","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"30rpx","borderWidth":"0 20rpx 20rpx 0","width":"85%","borderStyle":"solid","height":"auto"}'>
		<view class="logo" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="true">
			<image :style='{"padding":"0","boxShadow":"0 0 0px #59f43e","margin":"0 auto","borderColor":"#ccc","borderRadius":"50%","borderWidth":"0","width":"160rpx","borderStyle":"solid","url":"http://codegen.caihongy.cn/20220221/49f92174dd634c3c8b1a5c57e3d28240.jfif","isShow":true,"height":"160rpx"}' src='http://codegen.caihongy.cn/20220221/49f92174dd634c3c8b1a5c57e3d28240.jfif' mode="aspectFill"></image>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.shangjiamingcheng"  type="text"  class="uni-input" name="" placeholder="商家名称" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
		</view>
        <view v-if="tableName=='shangjia'" class="uni-form-item uni-column">
            <input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
        </view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.jingyingfanwei"  type="text"  class="uni-input" name="" placeholder="经营范围" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.shangjiadizhi"  type="text"  class="uni-input" name="" placeholder="商家地址" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.fuzeren"  type="text"  class="uni-input" name="" placeholder="负责人" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.lianxidianhua"  type="text"  class="uni-input" name="" placeholder="联系电话" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.shenfenzheng"  type="text"  class="uni-input" name="" placeholder="身份证" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.yonghuzhanghao"  type="text"  class="uni-input" name="" placeholder="用户账号" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.yonghuxingming"  type="text"  class="uni-input" name="" placeholder="用户姓名" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
		</view>
        <view v-if="tableName=='yonghu'" class="uni-form-item uni-column">
            <input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
        </view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<picker  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
				<view :style='{"padding":"0 0 0 20rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 20rpx","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(190, 189, 189, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","lineHeight":"76rpx","fontSize":"28rpx","borderStyle":"solid"}'  class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.nianling"  type="text"  class="uni-input" name="" placeholder="年龄" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(189, 223, 229, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","width":"100%","fontSize":"26rpx","borderStyle":"solid","height":"76rpx"}'  v-model="ruleForm.shoujihao"  type="text"  class="uni-input" name="" placeholder="手机号" />
		</view>
		<button class="btn-submit" @tap="register" type="primary" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(189, 223, 229, 1)","borderRadius":"40rpx","color":"#333","borderWidth":"0px","width":"100%","fontSize":"30rpx","borderStyle":"solid","height":"76rpx"}'>注册</button>
	</view>
</view>
</template>

<style>
	.btn-submit {
		height: auto !important;
		line-height: 76rpx;
	}
</style>
<script>
	export default {
		data() {
			return {
                                yonghuxingbieOptions: [],
                                yonghuxingbieIndex: 0,
				ruleForm: {
				},
				emailcode: "",
				tableName:""
			}
		},
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
	    		this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yonghu'){
                this.yonghuxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yonghuxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

                        // 下拉变化
                        yonghuxingbieChange(e) {
                                this.yonghuxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
                        },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.shangjiamingcheng) && `shangjia` == this.tableName){
					this.$utils.msg(`商家名称不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `shangjia` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`shangjia` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.lianxidianhua) && `shangjia` == this.tableName){
					this.$utils.msg(`联系电话不能为空`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
					this.$utils.msg(`身份证应输入身份证格式`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yonghu` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if(`yonghu` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.shoujihao&&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
					this.$utils.msg(`手机号应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm, this.emailcode);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	.content {
		height: calc(100vh - 44px);
		overflow: auto;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220221/07d245aeb2ff476b83d927b0ced4fd5d.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
.picker-select-input {
	line-height: 76rpx;
}

</style>
