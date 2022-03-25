<script lang="ts">
	import {
		calendar,
		personCircle,
		map,
		informationCircle
	} from 'ionicons/icons'

	import Link from '$lib/components/link.svelte'
</script>

<ion-view>
	<ion-tabs>
		<ion-tab tab="tab-schedule">
			<ion-header>
				<ion-toolbar>
					<ion-title>Toolbar</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content fullscreen={true}>
				<main
					class="flex flex-col justify-center items-center w-full h-full"
				>
					<h1>Hello</h1>

					<Link href="/hi">
						<ion-button> To hi </ion-button>
					</Link>
				</main>
			</ion-content>
		</ion-tab>

		<ion-tab tab="tab-speaker">
			<ion-nav />
		</ion-tab>

		<ion-tab tab="tab-map" component="page-map">
			<ion-nav />
		</ion-tab>

		<ion-tab tab="tab-about" component="page-about">
			<ion-nav />
		</ion-tab>

		<ion-tab-bar slot="bottom">
			<ion-tab-button tab="tab-schedule">
				<ion-icon icon={calendar} />
				<ion-label>Schedule</ion-label>
				<ion-badge>6</ion-badge>
			</ion-tab-button>

			<ion-tab-button tab="tab-speaker">
				<ion-icon icon={personCircle} />
				<ion-label>Speakers</ion-label>
			</ion-tab-button>

			<ion-tab-button tab="tab-map">
				<ion-icon icon={map} />
				<ion-label>Map</ion-label>
			</ion-tab-button>

			<ion-tab-button tab="tab-about">
				<ion-icon icon={informationCircle} />
				<ion-label>About</ion-label>
			</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</ion-view>
