import type { IonApp } from '@ionic/core/components/ion-app'
import type { IonAccordion } from '@ionic/core/components/ion-accordion'
import type { IonAccordionGroup } from '@ionic/core/components/ion-accordion-group'
import type { IonActionSheet } from '@ionic/core/components/ion-action-sheet'
import type { IonAlert } from '@ionic/core/components/ion-alert'
import type { IonAvatar } from '@ionic/core/components/ion-avatar'
import type { IonBackButton } from '@ionic/core/components/ion-back-button'
import type { IonBackdrop } from '@ionic/core/components/ion-backdrop'
import type { IonBadge } from '@ionic/core/components/ion-badge'
import type { IonBreadcrumb } from '@ionic/core/components/ion-breadcrumb'
import type { IonBreadcrumbs } from '@ionic/core/components/ion-breadcrumbs'
import type { IonButton } from '@ionic/core/components/ion-button'
import type { IonButtons } from '@ionic/core/components/ion-buttons'
import type { IonCard } from '@ionic/core/components/ion-card'
import type { IonCardContent } from '@ionic/core/components/ion-card-content'
import type { IonCardHeader } from '@ionic/core/components/ion-card-header'
import type { IonCardSubtitle } from '@ionic/core/components/ion-card-subtitle'
import type { IonCardTitle } from '@ionic/core/components/ion-card-title'
import type { IonCheckbox } from '@ionic/core/components/ion-checkbox'
import type { IonChip } from '@ionic/core/components/ion-chip'
import type { IonCol } from '@ionic/core/components/ion-col'
import type { IonContent } from '@ionic/core/components/ion-content'
import type { IonDatetime } from '@ionic/core/components/ion-datetime'
import type { IonFab } from '@ionic/core/components/ion-fab'
import type { IonFabButton } from '@ionic/core/components/ion-fab-button'
import type { IonFabList } from '@ionic/core/components/ion-fab-list'
import type { IonFooter } from '@ionic/core/components/ion-footer'
import type { IonGrid } from '@ionic/core/components/ion-grid'
import type { IonHeader } from '@ionic/core/components/ion-header'
import type { IonIcon } from '@ionic/core/components/ion-icon'
import type { IonImg } from '@ionic/core/components/ion-img'
import type { IonInfiniteScroll } from '@ionic/core/components/ion-infinite-scroll'
import type { IonInfiniteScrollContent } from '@ionic/core/components/ion-infinite-scroll-content'
import type { IonInput } from '@ionic/core/components/ion-input'
import type { IonItem } from '@ionic/core/components/ion-item'
import type { IonItemDivider } from '@ionic/core/components/ion-item-divider'
import type { IonItemGroup } from '@ionic/core/components/ion-item-group'
import type { IonItemOption } from '@ionic/core/components/ion-item-option'
import type { IonItemOptions } from '@ionic/core/components/ion-item-options'
import type { IonItemSliding } from '@ionic/core/components/ion-item-sliding'
import type { IonLabel } from '@ionic/core/components/ion-label'
import type { IonList } from '@ionic/core/components/ion-list'
import type { IonListHeader } from '@ionic/core/components/ion-list-header'
import type { IonMenu } from '@ionic/core/components/ion-menu'
import type { IonMenuButton } from '@ionic/core/components/ion-menu-button'
import type { IonMenuToggle } from '@ionic/core/components/ion-menu-toggle'
import type { IonModal } from '@ionic/core/components/ion-modal'
import type { IonNav } from '@ionic/core/components/ion-nav'
import type { IonNavLink } from '@ionic/core/components/ion-nav-link'
import type { IonNote } from '@ionic/core/components/ion-note'
import type { IonPicker } from '@ionic/core/components/ion-picker'
import type { IonPickerColumn } from '@ionic/core/components/ion-picker-column'
import type { IonPopover } from '@ionic/core/components/ion-popover'
import type { IonRadio } from '@ionic/core/components/ion-radio'
import type { IonRadioGroup } from '@ionic/core/components/ion-radio-group'
import type { IonRange } from '@ionic/core/components/ion-range'
import type { IonRefresher } from '@ionic/core/components/ion-refresher'
import type { IonRefresherContent } from '@ionic/core/components/ion-refresher-content'
import type { IonReorder } from '@ionic/core/components/ion-reorder'
import type { IonReorderGroup } from '@ionic/core/components/ion-reorder-group'
import type { IonRippleEffect } from '@ionic/core/components/ion-ripple-effect'
import type { IonRoute } from '@ionic/core/components/ion-route'
import type { IonRouter } from '@ionic/core/components/ion-router'
import type { IonRouterLink } from '@ionic/core/components/ion-router-link'
import type { IonRouterOutlet } from '@ionic/core/components/ion-router-outlet'
import type { IonRow } from '@ionic/core/components/ion-row'
import type { IonSearchbar } from '@ionic/core/components/ion-searchbar'
import type { IonSegment } from '@ionic/core/components/ion-segment'
import type { IonSegmentButton } from '@ionic/core/components/ion-segment-button'
import type { IonSelect } from '@ionic/core/components/ion-select'
import type { IonSelectOption } from '@ionic/core/components/ion-select-option'
import type { IonSelectPopover } from '@ionic/core/components/ion-select-popover'
import type { IonSkeletonText } from '@ionic/core/components/ion-skeleton-text'
import type { IonSlide } from '@ionic/core/components/ion-slide'
import type { IonSlides } from '@ionic/core/components/ion-slides'
import type { IonSpinner } from '@ionic/core/components/ion-spinner'
import type { IonSplitPane } from '@ionic/core/components/ion-split-pane'
import type { IonTabBar } from '@ionic/core/components/ion-tab-bar'
import type { IonTabButton } from '@ionic/core/components/ion-tab-button'
import type { IonTabs } from '@ionic/core/components/ion-tabs'
import type { IonText } from '@ionic/core/components/ion-text'
import type { IonTextarea } from '@ionic/core/components/ion-textarea'
import type { IonThumbnail } from '@ionic/core/components/ion-thumbnail'
import type { IonTitle } from '@ionic/core/components/ion-title'
import type { IonToggle } from '@ionic/core/components/ion-toggle'
import type { IonToolbar } from '@ionic/core/components/ion-toolbar'
import type { IonVirtualScroll } from '@ionic/core/components/ion-virtual-scroll'

declare global {
	namespace svelte.JSX {
		interface IntrinsicElements {
			'ion-app': Partial<IonApp>
			'ion-accordion': Partial<IonAccordion>
			'ion-accordion-group': Partial<IonAccordionGroup>
			'ion-action-sheet': Partial<IonActionSheet>
			'ion-action-sheet-controller': Partial<IonActionSheetController>
			'ion-alert': Partial<IonAlert>
			'ion-avatar': Partial<IonAvatar>
			'ion-back-button': Partial<IonBackButton>
			'ion-backdrop': Partial<IonBackdrop>
			'ion-badge': Partial<IonBadge>
			'ion-breadcrumb': Partial<IonBreadcrumb>
			'ion-breadcrumbs': Partial<IonBreadcrumbs>
			'ion-button': Partial<IonButton>
			'ion-buttons': Partial<IonButtons>
			'ion-card': Partial<IonCard>
			'ion-card-content': Partial<IonCardContent>
			'ion-card-header': Partial<IonCardHeader>
			'ion-card-subtitle': Partial<IonCardSubtitle>
			'ion-card-title': Partial<IonCardTitle>
			'ion-checkbox': Partial<IonCheckbox>
			'ion-chip': Partial<IonChip>
			'ion-col': Partial<IonCol>
			'ion-content': Partial<IonContent>
			'ion-datetime': Partial<IonDatetime>
			'ion-fab': Partial<IonFab>
			'ion-fab-button': Partial<IonFabButton>
			'ion-fab-list': Partial<IonFabList>
			'ion-footer': Partial<IonFooter>
			'ion-grid': Partial<IonGrid>
			'ion-header': Partial<IonHeader>
			'ion-icon': Partial<IonIcon>
			'ion-img': Partial<IonImg>
			'ion-infinite-scroll': Partial<IonInfiniteScroll>
			'ion-infinite-scroll-content': Partial<IonInfiniteScrollContent>
			'ion-input': Partial<IonInput>
			'ion-item': Partial<IonItem>
			'ion-item-divider': Partial<IonItemDivider>
			'ion-item-group': Partial<IonItemGroup>
			'ion-item-option': Partial<IonItemOption>
			'ion-item-options': Partial<IonItemOptions>
			'ion-item-sliding': Partial<IonItemSliding>
			'ion-label': Partial<IonLabel>
			'ion-list': Partial<IonList>
			'ion-list-header': Partial<IonListHeader>
			'ion-loading': Partial<IonLoading>
			'ion-menu': Partial<IonMenu>
			'ion-menu-button': Partial<IonMenuButton>
			'ion-menu-toggle': Partial<IonMenuToggle>
			'ion-modal': Partial<IonModal>
			'ion-nav': Partial<IonNav>
			'ion-nav-link': Partial<IonNavLink>
			'ion-note': Partial<IonNote>
			'ion-picker': Partial<IonPicker>
			'ion-picker-column': Partial<IonPickerColumn>
			'ion-popover': Partial<IonPopover>
			'ion-progress-bar': Partial<IonProgressBar>
			'ion-radio': Partial<IonRadio>
			'ion-radio-group': Partial<IonRadioGroup>
			'ion-range': Partial<IonRange>
			'ion-refresher': Partial<IonRefresher>
			'ion-refresher-content': Partial<IonRefresherContent>
			'ion-reorder': Partial<IonReorder>
			'ion-reorder-group': Partial<IonReorderGroup>
			'ion-ripple-effect': Partial<IonRippleEffect>
			'ion-route': Partial<IonRoute>
			'ion-route-redirect': Partial<IonRouteRedirect>
			'ion-route-link': Partial<IonRouteLink>
			'ion-route': Partial<IonRoute>
			'ion-router': Partial<IonRouter>
			'ion-router-link': Partial<IonRouterLink>
			'ion-router-outlet': Partial<IonRouterOutlet>
			'ion-row': Partial<IonRow>
			'ion-searchbar': Partial<IonSearchbar>
			'ion-segment': Partial<IonSegment>
			'ion-segment-button': Partial<IonSegmentButton>
			'ion-select': Partial<IonSelect>
			'ion-select-option': Partial<IonSelectOption>
			'ion-select-popover': Partial<IonSelectPopover>
			'ion-skeleton-text': Partial<IonSkeletonText>
			'ion-slide': Partial<IonSlide>
			'ion-slides': Partial<IonSlides>
			'ion-spinner': Partial<IonSpinner>
			'ion-split-pane': Partial<IonSplitPane>
			'ion-tab': Partial<IonTab>
			'ion-tab-bar': Partial<IonTabBar>
			'ion-tab-button': Partial<IonTabButton>
			'ion-tabs': Partial<IonTabs>
			'ion-text': Partial<IonText>
			'ion-textarea': Partial<IonTextarea>
			'ion-thumbnail': Partial<IonThumbnail>
			'ion-title': Partial<IonTitle>
			'ion-toast': Partial<IonToast>
			'ion-toggle': Partial<IonToggle>
			'ion-toolbar': Partial<IonToolbar>
			'ion-virtual-scroll': Partial<IonVirtualScroll>
		}
	}
}
