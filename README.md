# SDJ-Product-Card

Este es un paquete de pruebas de despliegue en npm

### Silvia djmery

## Ejemplo:

```
import {ProductCard, ProductTitle, ProductImage, ProductButtons} from 'sdj-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ reset, increaseBy, maxCount, count, isMaxCountReached }) => (

            <>
                <ProductTitle />
                <ProductImage />
                <ProductButtons />

            </>

        )
    }
</ProductCard>

```

