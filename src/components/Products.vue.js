import { computed, defineComponent, onMounted, ref } from "vue";
import Card from "./Card.vue";
export default defineComponent({
    components: {
        Card,
    },
    name: "Products",
    setup() {
        const products = ref([]);
        const search = ref("");
        const loading = ref(true);
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
                if (!response.ok)
                    throw new Error("Falha ao buscar produtos");
                const data = await response.json();
                products.value = data.map((product) => ({
                    ...product,
                    price: Number(product.price),
                }));
            }
            catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
            finally {
                loading.value = false;
            }
        };
        const filteredProducts = computed(() => products.value.filter((product) => product.name.toLowerCase().includes(search.value.toLowerCase())));
        const trackSearch = () => {
            console.log("Usuário está buscando:", search.value);
        };
        onMounted(() => {
            fetchProducts();
        });
        return {
            search,
            filteredProducts,
            loading,
            trackSearch,
        };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Card,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    for (const [product, index] of __VLS_getVForSourceType((__VLS_ctx.filteredProducts))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Card;
        /** @type { [typeof __VLS_components.Card, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((index)), product: ((product)), }));
        const __VLS_2 = __VLS_1({ key: ((index)), product: ((product)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['wrapper'];
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
