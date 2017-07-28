<template>
<div class="row">
	<form class="col s12 white hoverable myform" >
		<div class="row">
			<!--  <div class="col s12 center-align" v-show="loading"> <h6> Loading... </h6></div> -->
			<div class="col s12">
			<div class="row"></div>
			<div class="row"></div>
			<h4 class="center-align"> Submit a topic</h4>
				<form action="" method="post" accept-charset="utf-8" @submit.prevent="submitTopic()" class="white">
					<div class="input-field col s12 white ">
						<i class="material-icons prefix">mode_edit</i>
						<textarea id="topic" class="materialize-textarea" v-model="content" data-length="120" required></textarea>
						<label for="topic" data-error="wrong" data-success="right" > Topic </label>
					</div>
					<div class="col s12 right-align">
						<button :disabled="loading" class="btn waves-effect waves-light black" type="submit" name="action">Submit
						<i class="material-icons right">send</i>
						</button>
					</div>
				</form>
			</div>
			
		</div>
	</form>
</div>
</template>
<script>
	export default {
		name: 'news-form',
		data() {
			return {
				loading: false,
				content: ''
			};
		},
		methods: {
			submitTopic: function () {
				this.loading = true;
				console.log(this.content);
				 let topic = {
								content: this.content, 
								score: 1, // Initial self upvote
						 		by: 4 // TODO assign current user id
				 }
				  // POST someItem/1
			   this.$resource('http://localhost:1337/news/').save(topic).then(response => {
			   console.log('SAVED');
			   this.loading = false;
			   this.content = '';
			   this.$dialog("Topic submited succesfully!");
			 }, response => {
			   // error callback
			 });
			}
		}
	}
</script>
<style type="text/css" media="screen">
	form {
		padding: 5%;
	}
</style>