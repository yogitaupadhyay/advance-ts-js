## Compile type script

Below will compile a ts code to js.

```
tsc hello.ts
```

Below command will compile a ts code to js if there is no error.
noEmitOnError: Do not generate js code if error

```
tsc --noEmitOnError hello.ts
```

Changes ts code to es 2016, default is es3

```
 tsc --target es2015 hello.ts
```
