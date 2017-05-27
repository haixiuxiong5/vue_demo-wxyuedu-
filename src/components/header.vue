<template>
	<header class="header">
		{{title}}
	</header>
</template>
<script>
	export default{
		name:"header",
		props:['title']
	}
</script>
<style scoped lang="scss">
	.header{
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
</style>