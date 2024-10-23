import { defineComponent, ref, computed, watch } from "vue";
import Button from "./Button.vue";
export default defineComponent({
    components: {
        Button,
    },
    name: "Card",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const flip = ref(false);
        const isFavorite = ref(false);
        // Verificar se o card já está favoritado no local storage
        const checkFavorite = () => {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            isFavorite.value = favorites.includes(props.product.id);
        };
        const toggleFavorite = () => {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            if (isFavorite.value) {
                const index = favorites.indexOf(props.product.id);
                if (index > -1)
                    favorites.splice(index, 1);
            }
            else {
                favorites.push(props.product.id);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            isFavorite.value = !isFavorite.value;
        };
        const formattedPrice = computed(() => {
            return Number(props.product.price).toFixed(2);
        });
        const viewDetail = () => {
            flip.value = !flip.value;
        };
        watch(() => props.product.id, () => {
            checkFavorite();
        }, { immediate: true });
        return {
            formattedPrice,
            viewDetail,
            flip,
            isFavorite,
            toggleFavorite,
        };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Button,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['back'];
    __VLS_styleScopedClasses['favorite'];
    __VLS_styleScopedClasses['favorite'];
    __VLS_styleScopedClasses['back'];
    __VLS_styleScopedClasses['back'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ transform: __VLS_ctx.flip ? 'rotateY(180deg)' : 'none' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("front") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleFavorite) }, ...{ class: ("favorite") }, ...{ class: (({ active: __VLS_ctx.isFavorite })) }, });
    if (__VLS_ctx.isFavorite) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.product.image)), alt: ((__VLS_ctx.product.name)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.product.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.proportion.coffee);
    (__VLS_ctx.product.proportion.milk);
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (__VLS_ctx.formattedPrice);
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.viewDetail)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("back") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.product.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.description);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (__VLS_ctx.viewDetail)
    };
    let __VLS_11;
    let __VLS_12;
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_styleScopedClasses['front'];
    __VLS_styleScopedClasses['favorite'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['back'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
