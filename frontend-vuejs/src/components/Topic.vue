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
		<div class="row ">
			<div class="col s12 right-align grey-text">
				<!-- VueJS FILTERS #BringBackFilters -->
					<router-link class="waves-effect btn-flat lowercase" :to="'/topic/' + topic.id">{{ numComs }} {{ numComs | pluralize('comment') }}</router-link>
					<span class="waves-effect btn-flat lowercase" > by {{ author }}</span>
					<span class="waves-effect btn-flat lowercase "> submited {{ topic.createdAt | moment("from") }}</span>
				</div>
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
				upvoted: false,
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
				if (this.topic.comments) {
					return (this.topic.comments.length > 0) ? this.topic.comments.length : "No";
				} else {
					return null;
				}
			},
			author: function () {
				return this.topic.by.name;
			}			
		}
	}
</script>
<style type="text/css" media="screen">
	.lowercase {
		text-transform: lowercase;
		color: #78909c;
	}
</style>