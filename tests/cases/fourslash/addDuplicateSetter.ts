/// <reference path="fourslash.ts" />

//// class C {
////     set foo(value) { }
////     /**/
//// }

goTo.marker();
edit.insert("set foo(value) { }");


goTo.marker();
edit.insert("set bar(value) { }");


goTo.marker();
edit.insert("set baz(value) { }");
