# ng2-haversine

An Angular 2 library to calculate the distance between a pair of coordinates using the Haversine formula.

## Getting started

Install `ng2-haversine` using `npm` within your Angular 2 app directory:

```bash
$ npm instal ng2-haversine --save
```

Once the package is installed, set the provider for `HaversineService` in your `AppModule`:

```typescript
import { HaversineService } from "ng2-haversine";

@NgModule({
    ...
    providers: [HaversineService]
    ...
})
export class AppModule { }
```

Now you're ready to use `ng2-haversine`!

## How to

You can use `HaversineService` from a Service or from a Component: just inject it as a dependency. Remember to import `GeoCoord` as well:

```typescript
import { HaversineService, GeoCoord } from "ng2-haversine";

@Component({ ... })
export class MyComponent {
    constructor(private _haversineService: HaversineService) { }
}
```

Then, use some of the provided functions in `HaversineService` to calcule the distance between two points:

```typescript
tryHaversine(): void {
    let madrid: GeoCoord = {
        latitude: 40.416775,
        longitude: -3.703790
    };
    let bilbao: GeoCoord = {
        latitude: 43.262985,
        longitude: -2.935013
    };
    let meters = this._haversineService.getDistanceInMeters(madrid, bilbao);
    let kilometers = this._haversineService.getDistanceInKilometers(madrid, bilbao);
    let miles = this._haversineService.getDistanceInMiles(madrid, bilbao);
    console.log(`
        The distance between Madrid and Bilbao is:
            - ${meters} meters
            - ${kilometers} kilometers
            - ${miles} miles
    `);
}
```

## Using SystemJS

To load `ng2-haversine` using [SystemJS](https://github.com/systemjs/systemjs) is as simple as this. Open your `systemjs.config.js` file and set `map` and `packages` properties this way:

```javascript
(function (global) {
    System.config({
        map: {
            ...
            "ng2-haversine": "npm:ng2-haversine"
        },
        packages: {
            ...
            "ng2-haversine": {
                main: "./index.js",
                defaultExtension: "js"
            }
        }
    });
})(this);
```

That's it :)

## License

Code released under the [MIT license](./LICENSE).
