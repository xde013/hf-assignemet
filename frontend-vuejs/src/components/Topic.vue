<template>
<!-- Topic component -->
<div>
	<div class="card-panel hoverable">
		<div class="row valign-wrapper">
			<div class="col s2 center-align">
				<button class="btn-flat" @click="vote"> <i class="material-icons"> favorite </i> </button>
				<h6> {{ score }} </h6>
			</div>
			<div class="col s10">
				<p>
					{{ topic.content }}
				</p>
			</div>
		</div>
		<div class="row center-align">
			<div class="col s12">
				<!-- VueJS FILTERS #BringBackFilters -->
			<a :href="'#/topic/' + topic.id" class="waves-effect btn-flat full-width"> {{ numComs }} {{ numComs | pluralize('comment') }} </a>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		name : 'topic',
		
		props: ['topic'],
		data() {
			return {
				upvoted: false
			};
		},
		methods: {
			// toggle vote 
			vote: function () {
				var self = this;
				var new_score = self.upvoted ? self.score - 1 : self.score + 1; // intermediate score value
				// POST /news/:id/{paylod}
			this.$resource('http://localhost:1337/News{/id}').update({id: self.topic.id}, {score: new_score})
			.then(response => {
				self.upvoted = !self.upvoted;
				}, response => {
				console.log("ERROR UPDATE");
				});
			}
		},
		// Make score computed prop for better reactivity
		computed: {
			score: function() {
				return this.upvoted ? this.topic.score + 1 : this.topic.score;
			},
			numComs: function() {
				return this.topic.comments.length > 0 ? this.topic.comments.length : "No";
			}
		}
	}
</script>

<style type="text/css" media="screen">
	.full-width {
		width: 100%;
		text-transform: lowercase;
	}
</style>