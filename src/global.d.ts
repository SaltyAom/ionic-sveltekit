/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="@sveltejs/kit" />
import type { IonApp, IonButton } from '@ionic/core/components/ion-button'

declare global {
	namespace svelte.JSX {
		interface IntrinsicElements {
			magicEightBall: MagicEightBallProps
            "ion-button": Partial<IonButton>
		}

        interface MagicEightBallProps {
			/**
          A Yes/No question you have on your heart
          */
			question: ?string
			/**
          The personality of the user. 1 is very positive, 13 is super negative. ...
          */
			personality: ?number
		}
	}
}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onintersect?: () => void
	}

	export declare type UtilityNames =
		| 'p'
		| 'm'
		| 'w'
		| 'h'
		| 'z'
		| 'border'
		| 'grid'
		| 'flex'
		| 'bg'
		| 'text'
		| 'font'
		| 'opacity'
		| 'animate'
		| 'transition'
		| 'transform'
		| 'align'
		| 'justify'
		| 'content'
		| 'pos'
		| 'box'
		| 'overflow'
		| 'underline'
		| 'list'
		| 'gradient'
		| 'divide'
		| 'gap'
		| 'ring'
		| 'icon'
		| 'container'
		| 'space'
		| 'table'
		| 'order'
		| 'place'
		| 'display'
		| 'shadow'
		| 'blend'
		| 'filter'
		| 'backdrop'
		| 'cursor'
		| 'outline'
		| 'select'
	export declare type VariantNames =
		| 'hover'
		| 'active'
		| 'focus'
		| 'enabled'
		| 'dark'
		| 'light'
		| 'sm'
		| 'lg'
		| 'md'
		| 'xl'
		| 'xxl'
		| 'first'
		| 'last'
		| 'child'
		| 'root'
		| 'before'
		| 'after'
		| 'all'

	export declare type AttributifyNames<Prefix extends string = ''> =
		| `${Prefix}${UtilityNames}`
		| `${Prefix}${VariantNames}`
		| `${Prefix}${VariantNames}:${UtilityNames}`

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface HTMLProps<T>
		extends Partial<
			Record<AttributifyNames | keyof HTMLProps<T>, string>
		> {}
}
