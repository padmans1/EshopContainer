(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+fjr":
    /*!******************************************************!*\
      !*** ./src/modules/shared/components/pager/pager.ts ***!
      \******************************************************/

    /*! exports provided: Pager */

    /***/
    function fjr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pager", function () {
        return Pager;
      });
      /* harmony import */


      var _raw_loader_pager_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./pager.html */
      "8evf");
      /* harmony import */


      var _pager_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pager.scss */
      "iXAA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var Pager = /*#__PURE__*/function () {
        function Pager() {
          _classCallCheck(this, Pager);

          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.buttonStates = {
            nextDisabled: true,
            previousDisabled: true
          };
        }

        _createClass(Pager, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.model) {
              this.model.items = this.model.itemsPage > this.model.totalItems ? this.model.totalItems : this.model.itemsPage;
              this.buttonStates.previousDisabled = this.model.actualPage == 0;
              this.buttonStates.nextDisabled = this.model.actualPage + 1 >= this.model.totalPages;
            }
          }
        }, {
          key: "onNextClicked",
          value: function onNextClicked(event) {
            event.preventDefault();
            console.log('Pager next clicked');
            this.changed.emit(this.model.actualPage + 1);
          }
        }, {
          key: "onPreviousCliked",
          value: function onPreviousCliked(event) {
            event.preventDefault();
            console.log('Pager previous clicked');
            this.changed.emit(this.model.actualPage - 1);
          }
        }]);

        return Pager;
      }();

      Pager.propDecorators = {
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      Pager = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-pager',
        template: _raw_loader_pager_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pager_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], Pager);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\eShopOnContainers\src\Web\WebSPA\Client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0P2R":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/catalog/catalog.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function P2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"esh-catalog-filters\">\r\n    <div class=\"container\">\r\n        <div class=\"alert alert-warning esh-catalog-alert\" role=\"alert\" [hidden]=\"!errorReceived\">\r\n            Error requesting catalog products, please try later on\r\n        </div>\r\n        <div class=\"esh-catalog-filters-wrapper d-flex align-items-end  mt-3\">\r\n            <div class=\"esh-catalog-filter-wrapper\">\r\n                <label class=\"esh-catalog-label\" for=\"brand\">Brand</label>\r\n                <select class=\"esh-catalog-filter form-control\" id=\"brand\" (change)=\"onBrandFilterChanged($event, $event.target.value)\">\r\n                    <option *ngFor=\"let brand of brands\" [value]=\"brand.id\">{{brand.brand}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"esh-catalog-filter-wrapper\">\r\n                <label class=\"esh-catalog-label\" for=\"type\">Type</label>\r\n                <select class=\"esh-catalog-filter form-control\" id=\"type\" (change)=\"onTypeFilterChanged($event, $event.target.value)\">\r\n                    <option *ngFor=\"let type of types\" [value]=\"type.id\">{{type.type}}</option>\r\n                </select>\r\n            </div>\r\n            <button \r\n                type=\"button\" \r\n                class=\"btn btn-primary\"\r\n                (click)=\"onFilterApplied($event)\">Apply</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n    <div *ngIf=\"catalog?.data.length > 0\">\r\n        <esh-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></esh-pager>\r\n\r\n        <div class=\"esh-catalog-items row\">\r\n            <div class=\"col-12 col-sm-6 col-md-4 col-lg-3\" \r\n                 *ngFor=\"let item of catalog?.data\">\r\n                <div [ngClass]=\"{'esh-catalog-item': true, 'is-disabled': !authenticated }\" (click)=\"addToCart(item)\">\r\n                    <div class=\"esh-catalog-thumbnail-wrapper\">\r\n                        <div class=\"esh-catalog-thumbnail-icon d-flex justify-content-center\">\r\n                            <img class=\"esh-catalog-thumbnail-icon-svg\" src=\"assets/images/add.svg\" />\r\n                        </div>\r\n                        <img class=\"esh-catalog-thumbnail\" src=\"{{item.pictureUri}}\" />\r\n                    </div>\r\n                    <div class=\"esh-catalog-details d-flex justify-content-between align-items-center\">\r\n                        <div class=\"esh-catalog-name ml-3\">\r\n                            <span>{{item.name}}</span>\r\n                        </div>\r\n                        <div class=\"esh-catalog-price mr-3\">\r\n                            <span>{{item.price | number:'1.2-2'}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <esh-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></esh-pager>\r\n    </div>\r\n    <div *ngIf=\"catalog?.data.length == 0\">\r\n        <span>THERE ARE NO RESULTS THAT MATCH YOUR SEARCH</span>\r\n    </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "21Fg":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/header/header.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-header\">\r\n    <div class=\"container\">\r\n        <a class=\"esh-header-back\" routerLink=\"{{url}}\">\r\n            <ng-content></ng-content>\r\n        </a>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "4mXz":
    /*!*****************************************************************!*\
      !*** ./src/modules/orders/orders-new/orders-new.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function mXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-orders_new-titles {\n  padding-bottom: 1rem;\n  padding-top: 2rem;\n}\n.esh-orders_new-item {\n  font-size: 1rem;\n  font-weight: 300;\n}\n.esh-orders_new-thumbnail-container {\n  width: 10rem;\n}\n.esh-orders_new-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-orders_new-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n.esh-orders_new-buttons {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMtbmV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQUhSO0FBTUk7RUFDSSxlQ2dCTTtFRGZOLGdCQ1FnQjtBRFp4QjtBQU9JO0VBQ0ksWUFBQTtBQUxSO0FBUUk7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQVNJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFQUjtBQVVJO0VBQ0ksZ0JBQUE7QUFSUiIsImZpbGUiOiJvcmRlcnMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmVzaC1vcmRlcnNfbmV3IHtcclxuXHJcbiAgICAmLXRpdGxlcyB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbTtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZWRlO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmLWJ1dHRvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "6lyU":
    /*!***************************************************************!*\
      !*** ./src/modules/orders/orders-new/orders-new.component.ts ***!
      \***************************************************************/

    /*! exports provided: OrdersNewComponent */

    /***/
    function lyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersNewComponent", function () {
        return OrdersNewComponent;
      });
      /* harmony import */


      var _orders_new_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orders-new.component.scss */
      "4mXz");
      /* harmony import */


      var _raw_loader_orders_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders-new.component.html */
      "pujc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../orders.service */
      "J6to");
      /* harmony import */


      var _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../basket/basket.service */
      "GsTr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var OrdersNewComponent = /*#__PURE__*/function () {
        function OrdersNewComponent(orderService, basketService, fb, router) {
          _classCallCheck(this, OrdersNewComponent);

          this.orderService = orderService;
          this.basketService = basketService;
          this.router = router; // Obtain user profile information

          this.order = orderService.mapOrderAndIdentityInfoNewOrder();
          this.newOrderForm = fb.group({
            'street': [this.order.street, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'city': [this.order.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'state': [this.order.state, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'country': [this.order.country, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'cardnumber': [this.order.cardnumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'cardholdername': [this.order.cardholdername, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'expirationdate': [this.order.expiration, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'securitycode': [this.order.cardsecuritynumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(OrdersNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitForm",
          value: function submitForm(value) {
            var _this = this;

            this.order.street = this.newOrderForm.controls['street'].value;
            this.order.city = this.newOrderForm.controls['city'].value;
            this.order.state = this.newOrderForm.controls['state'].value;
            this.order.country = this.newOrderForm.controls['country'].value;
            this.order.cardnumber = this.newOrderForm.controls['cardnumber'].value;
            this.order.cardtypeid = 1;
            this.order.cardholdername = this.newOrderForm.controls['cardholdername'].value;
            this.order.cardexpiration = new Date(20 + this.newOrderForm.controls['expirationdate'].value.split('/')[1], this.newOrderForm.controls['expirationdate'].value.split('/')[0]);
            this.order.cardsecuritynumber = this.newOrderForm.controls['securitycode'].value;
            var basketCheckout = this.basketService.mapBasketInfoCheckout(this.order);
            this.basketService.setBasketCheckout(basketCheckout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errMessage) {
              _this.errorReceived = true;
              _this.isOrderProcessing = false;
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](errMessage);
            })).subscribe(function (res) {
              _this.router.navigate(['orders']);
            });
            this.errorReceived = false;
            this.isOrderProcessing = true;
          }
        }]);

        return OrdersNewComponent;
      }();

      OrdersNewComponent.ctorParameters = function () {
        return [{
          type: _orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]
        }, {
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      OrdersNewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders_new .esh-orders_new .mb-5',
        template: _raw_loader_orders_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_new_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"], _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], OrdersNewComponent);
      /***/
    },

    /***/
    "72p4":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/basket/basket-status/basket-status.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a class=\"esh-basketstatus pt-2 pb-2\"\r\n   [ngClass]=\"{'is-disabled': badge < 1}\"\r\n   [routerLink]=\"['basket']\">\r\n\r\n    <div class=\"esh-basketstatus-image ml-4 mr-1\">\r\n        <img src=\"assets/images/cart.svg\" />\r\n    </div>\r\n    <div class=\"esh-basketstatus-badge\">\r\n        {{badge}}\r\n    </div>\r\n</a>\r\n";
      /***/
    },

    /***/
    "8evf":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/pager/pager.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function evf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-pager\">\r\n    <div class=\"container\">\r\n        <article class=\"esh-pager-wrapper row\">\r\n            <nav class=\"w-100\">\r\n                <span class=\"esh-pager-item esh-pager-item--navigable\"\r\n                      id=\"Previous\"\r\n                      [ngClass]=\"{'is-disabled': buttonStates?.previousDisabled}\"\r\n                      (click)=\"onPreviousCliked($event)\"\r\n                      aria-label=\"Previous\">\r\n                    Previous\r\n                </span>\r\n\r\n                <span class=\"esh-pager-item\">\r\n                    Showing {{model?.items}} of {{model?.totalItems}} products - Page {{model?.actualPage + 1}} - {{model?.totalPages}}\r\n                </span>\r\n\r\n                <span class=\"esh-pager-item esh-pager-item--navigable\"\r\n                      id=\"Next\"\r\n                      [ngClass]=\"{'is-disabled': buttonStates?.nextDisabled}\"\r\n                      (click)=\"onNextClicked($event)\"\r\n                      aria-label=\"Next\">\r\n                    Next\r\n                </span>\r\n            </nav>\r\n        </article>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "9fF1":
    /*!**************************************************!*\
      !*** ./src/modules/catalog/catalog.component.ts ***!
      \**************************************************/

    /*! exports provided: CatalogComponent */

    /***/
    function fF1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
        return CatalogComponent;
      });
      /* harmony import */


      var _catalog_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./catalog.component.scss */
      "OlNY");
      /* harmony import */


      var _raw_loader_catalog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalog.component.html */
      "0P2R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog.service */
      "GIIC");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/services/basket.wrapper.service */
      "h7ng");
      /* harmony import */


      var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/services/security.service */
      "x8Yk");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CatalogComponent = /*#__PURE__*/function () {
        function CatalogComponent(service, basketService, configurationService, securityService) {
          _classCallCheck(this, CatalogComponent);

          this.service = service;
          this.basketService = basketService;
          this.configurationService = configurationService;
          this.securityService = securityService;
          this.authenticated = false;
          this.authenticated = securityService.IsAuthorized;
        }

        _createClass(CatalogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // Configuration Settings:
            if (this.configurationService.isReady) this.loadData();else this.configurationService.settingsLoaded$.subscribe(function (x) {
              _this2.loadData();
            }); // Subscribe to login and logout observable

            this.authSubscription = this.securityService.authenticationChallenge$.subscribe(function (res) {
              _this2.authenticated = res;
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            this.getBrands();
            this.getCatalog(12, 0);
            this.getTypes();
          }
        }, {
          key: "onFilterApplied",
          value: function onFilterApplied(event) {
            event.preventDefault();
            this.brandSelected = this.brandSelected && this.brandSelected.toString() != "null" ? this.brandSelected : null;
            this.typeSelected = this.typeSelected && this.typeSelected.toString() != "null" ? this.typeSelected : null;
            this.paginationInfo.actualPage = 0;
            this.getCatalog(this.paginationInfo.itemsPage, this.paginationInfo.actualPage, this.brandSelected, this.typeSelected);
          }
        }, {
          key: "onBrandFilterChanged",
          value: function onBrandFilterChanged(event, value) {
            event.preventDefault();
            this.brandSelected = value;
          }
        }, {
          key: "onTypeFilterChanged",
          value: function onTypeFilterChanged(event, value) {
            event.preventDefault();
            this.typeSelected = value;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(value) {
            console.log('catalog pager event fired' + value);
            event.preventDefault();
            this.paginationInfo.actualPage = value;
            this.getCatalog(this.paginationInfo.itemsPage, value);
          }
        }, {
          key: "addToCart",
          value: function addToCart(item) {
            if (!this.authenticated) {
              return;
            }

            this.basketService.addItemToBasket(item);
          }
        }, {
          key: "getCatalog",
          value: function getCatalog(pageSize, pageIndex, brand, type) {
            var _this3 = this;

            this.errorReceived = false;
            this.service.getCatalog(pageIndex, pageSize, brand, type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              return _this3.handleError(err);
            })).subscribe(function (catalog) {
              _this3.catalog = catalog;
              _this3.paginationInfo = {
                actualPage: catalog.pageIndex,
                itemsPage: catalog.pageSize,
                totalItems: catalog.count,
                totalPages: Math.ceil(catalog.count / catalog.pageSize),
                items: catalog.pageSize
              };
            });
          }
        }, {
          key: "getTypes",
          value: function getTypes() {
            var _this4 = this;

            this.service.getTypes().subscribe(function (types) {
              _this4.types = types;
              var alltypes = {
                id: null,
                type: 'All'
              };

              _this4.types.unshift(alltypes);
            });
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            var _this5 = this;

            this.service.getBrands().subscribe(function (brands) {
              _this5.brands = brands;
              var allBrands = {
                id: null,
                brand: 'All'
              };

              _this5.brands.unshift(allBrands);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.errorReceived = true;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](error);
          }
        }]);

        return CatalogComponent;
      }();

      CatalogComponent.ctorParameters = function () {
        return [{
          type: _catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"]
        }, {
          type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]
        }, {
          type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"]
        }];
      };

      CatalogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-catalog .esh-catalog .mb-5',
        template: _raw_loader_catalog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"]])], CatalogComponent);
      /***/
    },

    /***/
    "Ah7w":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app.component.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Ah7w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header class=\"esh-app-header\" [ngClass]=\"{'esh-app-header':true, 'esh-app-header--expanded': router.url === '/catalog'}\">\r\n    <div class=\"esh-app-header-promo\">\r\n        <span class=\"esh-app-header-promo-title\">All T-SHIRTS</span>\r\n        <span class=\"esh-app-header-promo-subtitle\">On sale this weekend</span>\r\n    </div>\r\n    <div class=\"container\">\r\n        <article class=\"d-flex align-content-center justify-content-between\">\r\n            <section>\r\n                <a routerLink=\"catalog\">\r\n                    <img class=\"esh-app-header-brand\" src=\"assets/images/logo_color.svg\" />\r\n                </a>\r\n            </section>\r\n\r\n            <section class=\"d-flex align-content-center justify-content-between\">\r\n                <esh-identity></esh-identity>\r\n                <esh-basket-status *ngIf=\"Authenticated\"></esh-basket-status>\r\n            </section>\r\n        </article>\r\n    </div>\r\n</header>\r\n\r\n<!-- component routing placeholder -->\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"esh-app-footer\">\r\n    <div class=\"container\">\r\n        <article class=\"d-flex w-100 h-100 justify-content-between align-items-center\">\r\n\r\n            <section>\r\n                <img class=\"esh-app-footer-brand\" src=\"assets/images/logo.svg\" />\r\n            </section>\r\n\r\n            <section>\r\n                © e-Shoponcontainers. All rights reserved\r\n            </section>\r\n\r\n        </article>\r\n    </div>\r\n</footer>\r\n\r\n";
      /***/
    },

    /***/
    "AiEP":
    /*!************************************************!*\
      !*** ./src/modules/basket/basket.component.ts ***!
      \************************************************/

    /*! exports provided: BasketComponent */

    /***/
    function AiEP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketComponent", function () {
        return BasketComponent;
      });
      /* harmony import */


      var _basket_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basket.component.scss */
      "I4Yj");
      /* harmony import */


      var _raw_loader_basket_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket.component.html */
      "gL9z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./basket.service */
      "GsTr");
      /* harmony import */


      var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/basket.wrapper.service */
      "h7ng");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BasketComponent = /*#__PURE__*/function () {
        function BasketComponent(basketSerive, router, basketWrapperService) {
          _classCallCheck(this, BasketComponent);

          this.basketSerive = basketSerive;
          this.router = router;
          this.basketWrapperService = basketWrapperService;
          this.totalPrice = 0;
        }

        _createClass(BasketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.basketSerive.getBasket().subscribe(function (basket) {
              _this6.basket = basket;

              _this6.calculateTotalPrice();
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            var _this7 = this;

            this.basket.items = this.basket.items.filter(function (item) {
              return item.id !== id;
            });
            this.calculateTotalPrice();
            this.basketSerive.setBasket(this.basket).subscribe(function (x) {
              _this7.basketSerive.updateQuantity();

              console.log('basket updated: ' + x);
            });
          }
        }, {
          key: "itemQuantityChanged",
          value: function itemQuantityChanged(item, quantity) {
            item.quantity = quantity > 0 ? quantity : 1;
            this.calculateTotalPrice();
            this.basketSerive.setBasket(this.basket).subscribe(function (x) {
              return console.log('basket updated: ' + x);
            });
          }
        }, {
          key: "update",
          value: function update(event) {
            var _this8 = this;

            var setBasketObservable = this.basketSerive.setBasket(this.basket);
            setBasketObservable.subscribe(function (x) {
              _this8.errorMessages = [];
              console.log('basket updated: ' + x);
            }, function (errMessage) {
              return _this8.errorMessages = errMessage.messages;
            });
            return setBasketObservable;
          }
        }, {
          key: "checkOut",
          value: function checkOut(event) {
            var _this9 = this;

            this.update(event).subscribe(function (x) {
              _this9.errorMessages = [];
              _this9.basketWrapperService.basket = _this9.basket;

              _this9.router.navigate(['order']);
            });
          }
        }, {
          key: "calculateTotalPrice",
          value: function calculateTotalPrice() {
            var _this10 = this;

            this.totalPrice = 0;
            this.basket.items.forEach(function (item) {
              _this10.totalPrice += item.unitPrice * item.quantity;
            });
          }
        }]);

        return BasketComponent;
      }();

      BasketComponent.ctorParameters = function () {
        return [{
          type: _basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["BasketWrapperService"]
        }];
      };

      BasketComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-basket .esh-basket .mb-5',
        template: _raw_loader_basket_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basket_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["BasketWrapperService"]])], BasketComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "EDuJ":
    /*!*********************************************!*\
      !*** ./src/modules/orders/orders.module.ts ***!
      \*********************************************/

    /*! exports provided: OrdersModule */

    /***/
    function EDuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
        return OrdersModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "uQzi");
      /* harmony import */


      var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.component */
      "aMt0");
      /* harmony import */


      var _orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orders-detail/orders-detail.component */
      "H5iX");
      /* harmony import */


      var _orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-new/orders-new.component */
      "6lyU");
      /* harmony import */


      var _orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.service */
      "J6to");
      /* harmony import */


      var _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../basket/basket.service */
      "GsTr");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var OrdersModule = function OrdersModule() {
        _classCallCheck(this, OrdersModule);
      };

      OrdersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], _orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrdersDetailComponent"], _orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__["OrdersNewComponent"]],
        providers: [_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"]]
      })], OrdersModule);
      /***/
    },

    /***/
    "F5ZD":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/page-not-found/page-not-found.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F5ZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>404!</h1>\r\n\r\n<p>Page you are looking for does not exists.</p>";
      /***/
    },

    /***/
    "FwHL":
    /*!*********************************************************************!*\
      !*** ./src/modules/basket/basket-status/basket-status.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BasketStatusComponent */

    /***/
    function FwHL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketStatusComponent", function () {
        return BasketStatusComponent;
      });
      /* harmony import */


      var _basket_status_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basket-status.component.scss */
      "OdHY");
      /* harmony import */


      var _raw_loader_basket_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-status.component.html */
      "72p4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../basket.service */
      "GsTr");
      /* harmony import */


      var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/basket.wrapper.service */
      "h7ng");
      /* harmony import */


      var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/services/security.service */
      "x8Yk");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/configuration.service */
      "b7Aq");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BasketStatusComponent = /*#__PURE__*/function () {
        function BasketStatusComponent(basketService, basketWrapperService, authService, configurationService) {
          _classCallCheck(this, BasketStatusComponent);

          this.basketService = basketService;
          this.basketWrapperService = basketWrapperService;
          this.authService = authService;
          this.configurationService = configurationService;
          this.badge = 0;
        }

        _createClass(BasketStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // Subscribe to Add Basket Observable:
            this.basketItemAddedSubscription = this.basketWrapperService.addItemToBasket$.subscribe(function (item) {
              _this11.basketService.addItemToBasket(item).subscribe(function (res) {
                _this11.basketService.getBasket().subscribe(function (basket) {
                  if (basket) _this11.badge = basket.items.length;
                });
              });
            });
            this.basketUpdateSubscription = this.basketService.basketUpdate$.subscribe(function (res) {
              _this11.basketService.getBasket().subscribe(function (basket) {
                _this11.badge = basket ? basket.items.length : 0;
              });
            }); // Subscribe to login and logout observable

            this.authSubscription = this.authService.authenticationChallenge$.subscribe(function (res) {
              _this11.basketService.getBasket().subscribe(function (basket) {
                if (basket != null) _this11.badge = basket.items.length;
              });
            }); // Init:

            if (this.configurationService.isReady) {
              this.basketService.getBasket().subscribe(function (basket) {
                if (basket != null) _this11.badge = basket.items.length;
              });
            } else {
              this.configurationService.settingsLoaded$.subscribe(function (x) {
                _this11.basketService.getBasket().subscribe(function (basket) {
                  if (basket != null) _this11.badge = basket.items.length;
                });
              });
            }
          }
        }]);

        return BasketStatusComponent;
      }();

      BasketStatusComponent.ctorParameters = function () {
        return [{
          type: _basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"]
        }, {
          type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"]
        }, {
          type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]
        }];
      };

      BasketStatusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-basket-status',
        template: _raw_loader_basket_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basket_status_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]])], BasketStatusComponent);
      /***/
    },

    /***/
    "GIIC":
    /*!************************************************!*\
      !*** ./src/modules/catalog/catalog.service.ts ***!
      \************************************************/

    /*! exports provided: CatalogService */

    /***/
    function GIIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogService", function () {
        return CatalogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/data.service */
      "fGsj");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CatalogService = /*#__PURE__*/function () {
        function CatalogService(service, configurationService) {
          var _this12 = this;

          _classCallCheck(this, CatalogService);

          this.service = service;
          this.configurationService = configurationService;
          this.catalogUrl = '';
          this.brandUrl = '';
          this.typesUrl = '';
          this.configurationService.settingsLoaded$.subscribe(function (x) {
            _this12.catalogUrl = _this12.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/items';
            _this12.brandUrl = _this12.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/catalogbrands';
            _this12.typesUrl = _this12.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/catalogtypes';
          });
        }

        _createClass(CatalogService, [{
          key: "getCatalog",
          value: function getCatalog(pageIndex, pageSize, brand, type) {
            var url = this.catalogUrl;

            if (type) {
              url = this.catalogUrl + '/type/' + type.toString() + '/brand/' + (brand ? brand.toString() : '');
            } else if (brand) {
              url = this.catalogUrl + '/type/all' + '/brand/' + (brand ? brand.toString() : '');
            }

            url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
            return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            return this.service.get(this.brandUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "getTypes",
          value: function getTypes() {
            return this.service.get(this.typesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              return response;
            }));
          }
        }]);

        return CatalogService;
      }();

      CatalogService.ctorParameters = function () {
        return [{
          type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }];
      };

      CatalogService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])], CatalogService);
      /***/
    },

    /***/
    "GsTr":
    /*!**********************************************!*\
      !*** ./src/modules/basket/basket.service.ts ***!
      \**********************************************/

    /*! exports provided: BasketService */

    /***/
    function GsTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketService", function () {
        return BasketService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/data.service */
      "fGsj");
      /* harmony import */


      var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/services/security.service */
      "x8Yk");
      /* harmony import */


      var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/basket.wrapper.service */
      "h7ng");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/services/storage.service */
      "tfFe");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BasketService = /*#__PURE__*/function () {
        function BasketService(service, authService, basketWrapperService, router, configurationService, storageService) {
          var _this13 = this;

          _classCallCheck(this, BasketService);

          this.service = service;
          this.authService = authService;
          this.basketWrapperService = basketWrapperService;
          this.router = router;
          this.configurationService = configurationService;
          this.storageService = storageService;
          this.basketUrl = '';
          this.purchaseUrl = '';
          this.basket = {
            buyerId: '',
            items: []
          }; //observable that is fired when item is removed from basket

          this.basketUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.basketUpdate$ = this.basketUpdateSource.asObservable();
          this.basket.items = []; // Init:

          if (this.authService.IsAuthorized) {
            if (this.authService.UserData) {
              this.basket.buyerId = this.authService.UserData.sub;

              if (this.configurationService.isReady) {
                this.basketUrl = this.configurationService.serverSettings.purchaseUrl;
                this.purchaseUrl = this.configurationService.serverSettings.purchaseUrl;
                this.loadData();
              } else {
                this.configurationService.settingsLoaded$.subscribe(function (x) {
                  _this13.basketUrl = _this13.configurationService.serverSettings.purchaseUrl;
                  _this13.purchaseUrl = _this13.configurationService.serverSettings.purchaseUrl;

                  _this13.loadData();
                });
              }
            }
          }

          this.basketWrapperService.orderCreated$.subscribe(function (x) {
            _this13.dropBasket();
          });
        }

        _createClass(BasketService, [{
          key: "addItemToBasket",
          value: function addItemToBasket(item) {
            var basketItem = this.basket.items.find(function (value) {
              return value.productId == item.productId;
            });

            if (basketItem) {
              basketItem.quantity++;
            } else {
              this.basket.items.push(item);
            }

            return this.setBasket(this.basket);
          }
        }, {
          key: "setBasket",
          value: function setBasket(basket) {
            var url = this.purchaseUrl + '/b/api/v1/basket/';
            this.basket = basket;
            return this.service.post(url, basket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (response) {
              return true;
            }));
          }
        }, {
          key: "setBasketCheckout",
          value: function setBasketCheckout(basketCheckout) {
            var _this14 = this;

            var url = this.basketUrl + '/b/api/v1/basket/checkout';
            return this.service.postWithId(url, basketCheckout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (response) {
              _this14.basketWrapperService.orderCreated();

              return true;
            }));
          }
        }, {
          key: "getBasket",
          value: function getBasket() {
            var url = this.basketUrl + '/b/api/v1/basket/' + this.basket.buyerId;
            return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (response) {
              if (response.status === 204) {
                return null;
              }

              return response;
            }));
          }
        }, {
          key: "mapBasketInfoCheckout",
          value: function mapBasketInfoCheckout(order) {
            var basketCheckout = {};
            basketCheckout.street = order.street;
            basketCheckout.city = order.city;
            basketCheckout.country = order.country;
            basketCheckout.state = order.state;
            basketCheckout.zipcode = order.zipcode;
            basketCheckout.cardexpiration = order.cardexpiration;
            basketCheckout.cardnumber = order.cardnumber;
            basketCheckout.cardsecuritynumber = order.cardsecuritynumber;
            basketCheckout.cardtypeid = order.cardtypeid;
            basketCheckout.cardholdername = order.cardholdername;
            basketCheckout.total = 0;
            basketCheckout.expiration = order.expiration;
            return basketCheckout;
          }
        }, {
          key: "updateQuantity",
          value: function updateQuantity() {
            this.basketUpdateSource.next();
          }
        }, {
          key: "dropBasket",
          value: function dropBasket() {
            var _this15 = this;

            this.basket.items = [];
            this.setBasket(this.basket).subscribe(function (res) {
              _this15.basketUpdateSource.next();
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this16 = this;

            this.getBasket().subscribe(function (basket) {
              if (basket != null) _this16.basket.items = basket.items;
            });
          }
        }]);

        return BasketService;
      }();

      BasketService.ctorParameters = function () {
        return [{
          type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
        }, {
          type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]
        }, {
          type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      BasketService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])], BasketService);
      /***/
    },

    /***/
    "H5iX":
    /*!*********************************************************************!*\
      !*** ./src/modules/orders/orders-detail/orders-detail.component.ts ***!
      \*********************************************************************/

    /*! exports provided: OrdersDetailComponent */

    /***/
    function H5iX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersDetailComponent", function () {
        return OrdersDetailComponent;
      });
      /* harmony import */


      var _orders_detail_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orders-detail.component.scss */
      "UboX");
      /* harmony import */


      var _raw_loader_orders_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders-detail.component.html */
      "JD9h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../orders.service */
      "J6to");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var OrdersDetailComponent = /*#__PURE__*/function () {
        function OrdersDetailComponent(service, route) {
          _classCallCheck(this, OrdersDetailComponent);

          this.service = service;
          this.route = route;
          this.order = {};
        }

        _createClass(OrdersDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.route.params.subscribe(function (params) {
              var id = +params['id']; // (+) converts string 'id' to a number

              _this17.getOrder(id);
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            var _this18 = this;

            this.service.getOrder(id).subscribe(function (order) {
              _this18.order = order;
              console.log('order retrieved: ' + order.ordernumber);
              console.log(_this18.order);
            });
          }
        }]);

        return OrdersDetailComponent;
      }();

      OrdersDetailComponent.ctorParameters = function () {
        return [{
          type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      OrdersDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders_detail .esh-orders_detail .mb-5',
        template: _raw_loader_orders_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_detail_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], OrdersDetailComponent);
      /***/
    },

    /***/
    "HClI":
    /*!********************************************************!*\
      !*** ./src/modules/shared/services/signalr.service.ts ***!
      \********************************************************/

    /*! exports provided: SignalrService */

    /***/
    function HClI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignalrService", function () {
        return SignalrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./security.service */
      "x8Yk");
      /* harmony import */


      var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./configuration.service */
      "b7Aq");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SignalrService = /*#__PURE__*/function () {
        function SignalrService(securityService, configurationService, toastr) {
          var _this19 = this;

          _classCallCheck(this, SignalrService);

          this.securityService = securityService;
          this.configurationService = configurationService;
          this.toastr = toastr;
          this.SignalrHubUrl = '';
          this.msgSignalrSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.msgReceived$ = this.msgSignalrSource.asObservable();

          if (this.configurationService.isReady) {
            this.SignalrHubUrl = this.configurationService.serverSettings.signalrHubUrl;
            this.init();
          } else {
            this.configurationService.settingsLoaded$.subscribe(function (x) {
              _this19.SignalrHubUrl = _this19.configurationService.serverSettings.signalrHubUrl;

              _this19.init();
            });
          }
        }

        _createClass(SignalrService, [{
          key: "stop",
          value: function stop() {
            this._hubConnection.stop();
          }
        }, {
          key: "init",
          value: function init() {
            if (this.securityService.IsAuthorized == true) {
              this.register();
              this.stablishConnection();
              this.registerHandlers();
            }
          }
        }, {
          key: "register",
          value: function register() {
            var _this20 = this;

            this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]().withUrl(this.SignalrHubUrl + '/hub/notificationhub', {
              accessTokenFactory: function accessTokenFactory() {
                return _this20.securityService.GetToken();
              }
            }).configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information).withAutomaticReconnect().build();
          }
        }, {
          key: "stablishConnection",
          value: function stablishConnection() {
            this._hubConnection.start().then(function () {
              console.log('Hub connection started');
            })["catch"](function () {
              console.log('Error while establishing connection');
            });
          }
        }, {
          key: "registerHandlers",
          value: function registerHandlers() {
            var _this21 = this;

            this._hubConnection.on('UpdatedOrderState', function (msg) {
              console.log("Order ".concat(msg.orderId, " updated to ").concat(msg.status));

              _this21.toastr.success('Updated to status: ' + msg.status, 'Order Id: ' + msg.orderId);

              _this21.msgSignalrSource.next();
            });
          }
        }]);

        return SignalrService;
      }();

      SignalrService.ctorParameters = function () {
        return [{
          type: _security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]
        }, {
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      SignalrService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"], _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], SignalrService);
      /***/
    },

    /***/
    "I4Yj":
    /*!**************************************************!*\
      !*** ./src/modules/basket/basket.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function I4Yj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-basket-item {\n  background-color: #fff;\n  margin-bottom: 1.5rem;\n}\n.esh-basket-delete {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 2rem;\n  justify-content: center;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n  transition: all 0.15s;\n  width: 2rem;\n  z-index: 20;\n}\n.esh-basket-delete:hover {\n  transform: scale(1.2);\n}\n.esh-basket-delete-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basket-buttons {\n  width: 5rem;\n}\n.esh-basket-button {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  height: 1.5rem;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s;\n  width: 1.5rem;\n  z-index: 20;\n}\n.esh-basket-button.is-disabled {\n  cursor: default;\n  opacity: 0.3;\n}\n.esh-basket-button-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basket-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-basket-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n.esh-basket-title {\n  font-size: 1rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  text-transform: uppercase;\n}\n.esh-basket-description {\n  min-height: 3rem;\n  padding: 0 1rem;\n}\n.esh-basket-quantity {\n  line-height: 1.5rem;\n  text-align: center;\n  width: 2rem;\n}\n.esh-basket-price {\n  color: #f66f61;\n  width: 4rem;\n}\n.esh-basket-checkout {\n  background-color: #fff;\n}\n.esh-basket-checkout-title {\n  font-weight: 600;\n  text-align: center;\n}\n.esh-basket-input {\n  line-height: 1rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhc2tldC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBUFI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVJSO0FBVVE7RUFDSSxxQkFBQTtBQVJaO0FBWUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVZSO0FBYUk7RUFDSSxXQUFBO0FBWFI7QUFjSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVpSO0FBY1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVpaO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFkUjtBQWlCSTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFoQlI7QUFtQkk7RUFDSSxlQ3hETTtFRHlETixpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWxCUjtBQXFCSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbkJSO0FBc0JJO0VBQ0ksY0NuR1E7RURvR1IsV0FBQTtBQXBCUjtBQXVCSTtFQUNJLHNCQ2hHVTtBRDJFbEI7QUF3Qkk7RUFDSSxnQkN4RmU7RUR5RmYsa0JBQUE7QUF0QlI7QUF5Qkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUF2QlIiLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuQG1peGluIG1hcmdpbi1sZWZ0KCRkaXN0YW5jZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRkaXN0YW5jZTtcclxufVxyXG5cclxuLmVzaC1iYXNrZXQge1xyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1kZWxldGUge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLjVyZW07XHJcbiAgICAgICAgdG9wOiAuNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGlvbi1zcGVlZC1mYXN0O1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWRlbGV0ZS1zdmcge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYtYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZmFzdDtcclxuICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG5cclxuICAgICAgICAmLmlzLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b24tc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZWRlO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1jaGVja291dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgIH1cclxuXHJcbiAgICAmLWNoZWNrb3V0LXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLWlucHV0IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBDb2xvcnNcclxuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMjkyOTI5O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlcjogIzk3OTc5NztcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlc3Q6ICNmM2Y0ZjM7XHJcblxyXG4kY29sb3ItZGFya2VzdDogIzAwMDtcclxuJGNvbG9yLWJyaWdodGVzdDogI2ZmZjtcclxuXHJcblxyXG4vLyBBbmltYXRpb25zXHJcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcclxuJGFuaW1hdGlvbi1zcGVlZC1zbG93OiAuNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtZmFzdDogLjE1cztcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LXdlaWdodC1saWdodDogMjAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4kZm9udC1zaXplLXhzOiAuNzVyZW07ICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XHJcbiRmb250LXNpemUtbTogMXJlbTsgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbDogMS4xMjVyZW07ICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS14eGw6IDEuNTYyNXJlbTsgICAvLyAyNXB4XHJcblxyXG4vLyBNZWRpYXNcclxuJG1lZGlhLXNjcmVlbi14eHM6IDM2MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXhzOiA2NDBweDtcclxuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcclxuJG1lZGlhLXNjcmVlbi1tOiAxMDI0cHg7XHJcbiRtZWRpYS1zY3JlZW4tbDogMTI4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XHJcbiRtZWRpYS1zY3JlZW4teHhsOiAxNjgwcHg7XHJcbiRtZWRpYS1zY3JlZW4teHh4bDogMTkyMHB4O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWxpZ2h0OiAxcHg7XHJcblxyXG4vLyBJbWFnZXNcclxuJGltYWdlX3BhdGg6ICcvYXNzZXRzL2ltYWdlcy8nO1xyXG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xyXG4iXX0= */";
      /***/
    },

    /***/
    "J6to":
    /*!**********************************************!*\
      !*** ./src/modules/orders/orders.service.ts ***!
      \**********************************************/

    /*! exports provided: OrdersService */

    /***/
    function J6to(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return OrdersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/data.service */
      "fGsj");
      /* harmony import */


      var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/security.service */
      "x8Yk");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/basket.wrapper.service */
      "h7ng");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var OrdersService = /*#__PURE__*/function () {
        function OrdersService(service, basketService, identityService, configurationService) {
          var _this22 = this;

          _classCallCheck(this, OrdersService);

          this.service = service;
          this.basketService = basketService;
          this.identityService = identityService;
          this.configurationService = configurationService;
          this.ordersUrl = '';
          if (this.configurationService.isReady) this.ordersUrl = this.configurationService.serverSettings.purchaseUrl;else this.configurationService.settingsLoaded$.subscribe(function (x) {
            return _this22.ordersUrl = _this22.configurationService.serverSettings.purchaseUrl;
          });
        }

        _createClass(OrdersService, [{
          key: "getOrders",
          value: function getOrders() {
            var url = this.ordersUrl + '/o/api/v1/orders';
            return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(orderNumber) {
            var url = this.ordersUrl + '/o/api/v1/orders/cancel';
            var data = {
              OrderNumber: orderNumber
            };
            return this.service.putWithId(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              return;
            }));
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            var url = this.ordersUrl + '/o/api/v1/orders/' + id;
            return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "mapOrderAndIdentityInfoNewOrder",
          value: function mapOrderAndIdentityInfoNewOrder() {
            var order = {};
            var basket = this.basketService.basket;
            var identityInfo = this.identityService.UserData;
            console.log(basket);
            console.log(identityInfo); // Identity data mapping:

            order.street = identityInfo.address_street;
            order.city = identityInfo.address_city;
            order.country = identityInfo.address_country;
            order.state = identityInfo.address_state;
            order.zipcode = identityInfo.address_zip_code;
            order.cardexpiration = identityInfo.card_expiration;
            order.cardnumber = identityInfo.card_number;
            order.cardsecuritynumber = identityInfo.card_security_number;
            order.cardtypeid = identityInfo.card_type;
            order.cardholdername = identityInfo.card_holder;
            order.total = 0;
            order.expiration = identityInfo.card_expiration; // basket data mapping:

            order.orderItems = new Array();
            basket.items.forEach(function (x) {
              var item = {};
              item.pictureurl = x.pictureUrl;
              item.productId = +x.productId;
              item.productname = x.productName;
              item.unitprice = x.unitPrice;
              item.units = x.quantity;
              order.total += item.unitprice * item.units;
              order.orderItems.push(item);
            });
            order.buyer = basket.buyerId;
            return order;
          }
        }]);

        return OrdersService;
      }();

      OrdersService.ctorParameters = function () {
        return [{
          type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"]
        }, {
          type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]
        }];
      };

      OrdersService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])], OrdersService);
      /***/
    },

    /***/
    "JD9h":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders-detail/orders-detail.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JD9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-orders_detail\">\r\n    <div class=\"container\">\r\n        <h1 class=\"mb-4 mt-5\">[ Order List Detail ]</h1>\r\n        <div class=\"u-background-brightest p-5\">\r\n            <article class=\"esh-orders_detail-titles row\">\r\n                <section class=\"col-3\">Order number</section>\r\n                <section class=\"col-3\">Date</section>\r\n                <section class=\"col-3\">Total</section>\r\n                <section class=\"col-3\">Status</section>\r\n            </article>\r\n\r\n            <article class=\"esh-orders_detail-items row\">\r\n                <section class=\"col-3\">{{order.ordernumber}}</section>\r\n                <section class=\"col-3\">{{order.date | date:'short'}}</section>\r\n                <section class=\"col-3\">$ {{order.total}}</section>\r\n                <section class=\"col-3\">{{order.status}}</section>\r\n            </article>\r\n\r\n            <h2 class=\"esh-orders_detail-title mt-5\">Shipping address</h2>\r\n            <div class=\"u-mb-5\">{{order.street}} {{order.city}} {{order.country}}</div>\r\n\r\n            <article class=\"esh-orders_detail-items divider divider--bottom d-flex align-items-center pb-3 mt-3 u-text-sm\"\r\n                     *ngFor=\"let item of order.orderitems\">\r\n                <div class=\"esh-orders_detail-thumbnail-container\">\r\n                    <div class=\"esh-orders_detail-thumbnail-wrapper\">\r\n                        <img class=\"esh-orders_detail-thumbnail\" src=\"{{item.pictureurl}}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row w-100 ml-3\">\r\n                    <div class=\"col-6\">{{item.productname}}</div>\r\n                    <div class=\"col-2\">$ {{item.unitprice | number:'.2-2'}}</div>\r\n                    <div class=\"col-2\">{{item.units}}</div>\r\n                    <div class=\"col-2 text-right\">${{(item.units * item.unitprice) | number:'.2-2'}}</div>\r\n                </div>\r\n            </article>\r\n\r\n            <div class=\"d-flex align-items-center justify-content-end mt-4 mb-4 text-uppercase u-text-xl\">\r\n                <div>Total</div>\r\n                <div class=\"ml-3\">${{order.total | number:'.2-2'}}</div>\r\n            </div>\r\n\r\n            <aside class=\"d-flex justify-content-end mt-5\">\r\n                <a class=\"btn btn-secondary\" routerLink=\"/orders\">Back to list</a>\r\n            </aside>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "OdHY":
    /*!***********************************************************************!*\
      !*** ./src/modules/basket/basket-status/basket-status.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function OdHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-basketstatus {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  position: relative;\n  transition: all 0.35s;\n}\n.esh-basketstatus.is-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.esh-basketstatus-image {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basketstatus-badge {\n  background-color: #f66f61;\n  border-radius: 50%;\n  bottom: 0;\n  color: #fff;\n  display: block;\n  font-size: 0.75rem;\n  line-height: 1.2rem;\n  height: 1.2rem;\n  right: 0;\n  position: absolute;\n  text-align: center;\n  transition: all 0.15s;\n  width: 1.2rem;\n}\n.esh-basketstatus:hover .esh-basketstatus-badge {\n  transform: scale(1.2) rotate(20deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYXNrZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRlI7QUFLSTtFQUNJLHlCQ25CUTtFRG9CUixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQ2RVO0VEZVYsY0FBQTtFQUNBLGtCQ0RPO0VERVAsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFIUjtBQU1JO0VBQ0ksbUNBQUE7QUFKUiIsImZpbGUiOiJiYXNrZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmVzaC1iYXNrZXRzdGF0dXMge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcclxuXHJcbiAgICAmLmlzLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLWJhZGdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZmFzdDtcclxuICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgJi1iYWRnZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgyMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "OlNY":
    /*!****************************************************!*\
      !*** ./src/modules/catalog/catalog.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function OlNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-catalog-title {\n  position: relative;\n  top: 74.2857142857px;\n}\n.esh-catalog-filters {\n  height: 65px;\n}\n.esh-catalog-filters-wrapper {\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.esh-catalog-filter-wrapper {\n  margin-right: 0.5rem;\n  position: relative;\n}\n.esh-catalog-filter-wrapper:after {\n  border-bottom: 1px solid #292929;\n  border-right: 1px solid #292929;\n  bottom: 1rem;\n  content: \"\";\n  height: 0.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0.9rem;\n  transform: rotate(45deg);\n  width: 0.5rem;\n  z-index: 1;\n}\n.esh-catalog-filter {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: solid 3px #292929;\n  border-radius: 0;\n  cursor: pointer;\n  margin-right: 1rem;\n  min-width: 140px;\n  outline-color: #292929;\n  padding-left: 0.5rem;\n  padding-right: 2rem;\n}\n.esh-catalog-filter option {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: unset;\n}\n.esh-catalog-filter option:hover {\n  background-color: #f66f61;\n  color: #fff;\n  cursor: pointer;\n}\n.esh-catalog-filter option:active {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:focus {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:current {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:selected {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-label {\n  display: inline-block;\n  font-size: 1rem;\n  margin-bottom: 0;\n  position: relative;\n  z-index: 0;\n}\n.esh-catalog-items {\n  margin-top: 1rem;\n}\n.esh-catalog-item {\n  cursor: pointer;\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n.esh-catalog-item:hover {\n  background-color: #fff;\n}\n.esh-catalog-item:hover .esh-catalog-thumbnail-icon {\n  opacity: 1;\n}\n.esh-catalog-item.is-disabled {\n  background-color: unset;\n  cursor: default;\n}\n.esh-catalog-item.is-disabled .esh-catalog-thumbnail-icon {\n  display: none !important;\n}\n.esh-catalog-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-catalog-thumbnail-icon {\n  background-color: #f66f61;\n  border-radius: 50%;\n  height: 3.5rem;\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 3.5rem;\n  z-index: 20;\n  transition: all 0.35s;\n}\n.esh-catalog-thumbnail-icon-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-catalog-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  z-index: 10;\n}\n.esh-catalog-details {\n  height: 4rem;\n}\n.esh-catalog-name {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.esh-catalog-price {\n  color: #f66f61;\n  font-size: 1rem;\n}\n.esh-catalog-price::before {\n  content: \"$\";\n}\n.esh-catalog-alert {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUpSO0FBU0k7RUFDSSxZQUhZO0FBSnBCO0FBVUk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBUlI7QUFXSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdRO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQVRaO0FBYUk7RUFDSSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQzdDVTtFRDhDVixvQkFBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQUNJLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGFBQUE7QUFYWjtBQWFZO0VBQ0kseUJDeERBO0VEeURBLFdDakRFO0VEa0RGLGVBQUE7QUFYaEI7QUFjWTtFQUNJLHlCQzlEQTtFRCtEQSxXQ3ZERTtBRDJDbEI7QUFlWTtFQUNJLHlCQ25FQTtFRG9FQSxXQzVERTtBRCtDbEI7QUFnQlk7RUFDSSx5QkN4RUE7RUR5RUEsV0NqRUU7QURtRGxCO0FBaUJZO0VBQ0kseUJDN0VBO0VEOEVBLFdDdEVFO0FEdURsQjtBQW9CSTtFQUNJLHFCQUFBO0VBQ0EsZUM1RE07RUQ2RE4sZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFsQlI7QUFnQ0k7RUFDSSxnQkFBQTtBQTlCUjtBQWlDSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDSSxzQkN4R007QUR5RWxCO0FBaUNZO0VBQ0ksVUFBQTtBQS9CaEI7QUFtQ1E7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFqQ1o7QUFtQ1k7RUFDSSx3QkFBQTtBQWpDaEI7QUFzQ0k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFwQ1I7QUF1Q0k7RUFDSSx5QkMxSVE7RUQySVIsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFyQ1I7QUF3Q0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXRDUjtBQXlDSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXZDUjtBQTBDSTtFQUNJLFlBQUE7QUF4Q1I7QUEyQ0k7RUFDSSxlQ2xKTTtFRG1KTix5QkFBQTtBQXpDUjtBQTRDSTtFQUNJLGNDaExRO0VEaUxSLGVDeEpNO0FEOEdkO0FBNENRO0VBQ0ksWUFBQTtBQTFDWjtBQThDSTtFQUNJLGdCQUFBO0FBNUNSIiwiZmlsZSI6ImNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZXNoLWNhdGFsb2cge1xyXG4gICAgJGJhbm5lci1oZWlnaHQ6IDI2MHB4O1xyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6ICRiYW5uZXItaGVpZ2h0IC8gMy41O1xyXG4gICAgfVxyXG4gXHJcbiAgICAkZmlsdGVyLWhlaWdodDogNjVweDtcclxuXHJcbiAgICAmLWZpbHRlcnMge1xyXG4gICAgICAgIGhlaWdodDogJGZpbHRlci1oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi1maWx0ZXJzLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1maWx0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICAgICAgYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC45cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAuNXJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1maWx0ZXIge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggJGNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmN1cnJlbnQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpzZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgICAvLyAmOmJlZm9yZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAvLyAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXM7XHJcbiAgICAgICAgLy8gICAgIGxlZnQ6IC43cmVtO1xyXG4gICAgICAgIC8vICAgICB0b3A6IC4ycmVtO1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuXHJcbiAgICAgICAgICAgIC5lc2gtY2F0YWxvZy10aHVtYm5haWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmlzLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgICAgICAgIC5lc2gtY2F0YWxvZy10aHVtYm5haWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi10aHVtYm5haWwtd3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVkZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aHVtYm5haWwtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRodW1ibmFpbC1pY29uLXN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi10aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1kZXRhaWxzIHtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICYtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbTtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWFsZXJ0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVyOiAjOTc5Nzk3O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcclxuXHJcbiRjb2xvci1kYXJrZXN0OiAjMDAwO1xyXG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xyXG5cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLXNsb3c6IC41cztcclxuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcclxuJGZvbnQtc2l6ZS1tOiAxcmVtOyAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxyXG4kZm9udC1zaXplLXh4bDogMS41NjI1cmVtOyAgIC8vIDI1cHhcclxuXHJcbi8vIE1lZGlhc1xyXG4kbWVkaWEtc2NyZWVuLXh4czogMzYwcHg7XHJcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xyXG4kbWVkaWEtc2NyZWVuLW06IDEwMjRweDtcclxuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XHJcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcclxuJG1lZGlhLXNjcmVlbi14eGw6IDE2ODBweDtcclxuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItbGlnaHQ6IDFweDtcclxuXHJcbi8vIEltYWdlc1xyXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XHJcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Qdu6":
    /*!****************************************!*\
      !*** ./src/modules/app.component.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function Qdu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.esh-app-header {\n  background: url(\"/assets/images/header.jpg\") center -2.7rem no-repeat, linear-gradient(90deg, #5F6571 0%, #5F6571 35%, #CFC6BF 65%, #CFC6BF 100%);\n  background-size: 94rem, auto;\n  height: 13rem;\n  padding-top: 2.25rem;\n  position: relative;\n  transition: all 0.35s;\n}\n\n.esh-app-header--expanded {\n  background-position: center top;\n  background-size: 87rem, auto;\n  height: 29rem;\n}\n\n.esh-app-header--expanded .esh-app-header-promo {\n  opacity: 1;\n}\n\n.esh-app-header-brand {\n  height: auto;\n  width: 92px;\n}\n\n.esh-app-header-promo {\n  bottom: 3.5rem;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  transition: all 0.35s;\n  width: 100%;\n}\n\n.esh-app-header-promo-title {\n  display: block;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 5rem;\n  line-height: 5rem;\n  word-wrap: none;\n}\n\n@media screen and (min-width: 768px) {\n  .esh-app-header-promo-title {\n    font-size: 9rem;\n    line-height: 9rem;\n  }\n}\n\n.esh-app-header-promo-subtitle {\n  display: block;\n  color: #fff;\n  font-size: 1.5625rem;\n}\n\n.esh-app-footer {\n  background-color: #81828d;\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  height: 7rem;\n  margin-top: auto;\n}\n\n.esh-app-footer-brand {\n  height: auto;\n  width: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQU1JO0VBQ0ksaUpBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFIUjs7QUFLUTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBSFo7O0FBS1k7RUFDSSxVQUFBO0FBSGhCOztBQVFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFOUjs7QUFTSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVBSOztBQVVJO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVJSOztBQVVRO0VBUEo7SUFRUSxlQUFBO0lBQ0EsaUJBQUE7RUFQVjtBQUNGOztBQVVJO0VBQ0ksY0FBQTtFQUNBLFdDakRVO0VEa0RWLG9CQzlCUTtBRHNCaEI7O0FBV0k7RUFDSSx5QkMzRGlCO0VENERqQixXQ3ZEVTtFRHdEVixlQ3ZDTTtFRHdDTixhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBV1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQVRaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVzaC1hcHAge1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hlYWRlci5qcGcnKSBjZW50ZXIgLTIuN3JlbSBuby1yZXBlYXQsIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVGNjU3MSAwJSwgIzVGNjU3MSAzNSUsICNDRkM2QkYgNjUlLCAjQ0ZDNkJGIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTRyZW0sIGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxM3JlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMi4yNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcclxuXHJcbiAgICAgICAgJi0tZXhwYW5kZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDg3cmVtLCBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI5cmVtO1xyXG5cclxuICAgICAgICAgICAgLmVzaC1hcHAtaGVhZGVyLXByb21vIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1oZWFkZXItYnJhbmQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogOTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWhlYWRlci1wcm9tbyB7XHJcbiAgICAgICAgYm90dG9tOiAzLjVyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi1oZWFkZXItcHJvbW8tdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1icmlnaHRlc3QsIC4zKTtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgd29yZC13cmFwOiBub25lO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaWEtc2NyZWVuLXMpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1oZWFkZXItcHJvbW8tc3VidGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eGw7XHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktYnJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcblxyXG4gICAgICAgICYtYnJhbmQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "QilE":
    /*!********************************************************!*\
      !*** ./src/modules/shared/components/header/header.ts ***!
      \********************************************************/

    /*! exports provided: Header */

    /***/
    function QilE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Header", function () {
        return Header;
      });
      /* harmony import */


      var _raw_loader_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./header.html */
      "21Fg");
      /* harmony import */


      var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.scss */
      "oFGJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var Header = function Header() {
        _classCallCheck(this, Header);
      };

      Header.propDecorators = {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      Header = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-header',
        template: _raw_loader_header_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], Header);
      /***/
    },

    /***/
    "ROcs":
    /*!****************************************************!*\
      !*** ./src/modules/shared/pipes/uppercase.pipe.ts ***!
      \****************************************************/

    /*! exports provided: UppercasePipe */

    /***/
    function ROcs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UppercasePipe", function () {
        return UppercasePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var UppercasePipe = /*#__PURE__*/function () {
        function UppercasePipe() {
          _classCallCheck(this, UppercasePipe);
        }

        _createClass(UppercasePipe, [{
          key: "transform",
          value: function transform(value) {
            return value.toUpperCase();
          }
        }]);

        return UppercasePipe;
      }();

      UppercasePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'appfUppercase'
      })], UppercasePipe);
      /***/
    },

    /***/
    "UboX":
    /*!***********************************************************************!*\
      !*** ./src/modules/orders/orders-detail/orders-detail.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function UboX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-orders_detail-titles {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n}\n.esh-orders_detail-title {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n.esh-orders_detail-items {\n  font-size: 1rem;\n  font-weight: 400;\n}\n.esh-orders_detail-thumbnail-container {\n  width: 10rem;\n}\n.esh-orders_detail-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-orders_detail-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksY0NEaUI7RURFakIsbUJDcUJNO0VEcEJOLGdCQ1lnQjtFRFhoQixxQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNSTtFQUNJLGNDVGlCO0VEVWpCLG1CQ2FNO0VEWk4sZ0JDSWdCO0VESGhCLHlCQUFBO0FBSlI7QUFPSTtFQUNJLGVDTU07RURMTixnQkNEYTtBREpyQjtBQVFJO0VBQ0ksWUFBQTtBQU5SO0FBU0k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVVJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFSUiIsImZpbGUiOiJvcmRlcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmVzaC1vcmRlcnNfZGV0YWlsIHtcclxuXHJcbiAgICAmLXRpdGxlcyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktYnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWxpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWJyaWdodDtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbDtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYtdGh1bWJuYWlsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYtdGh1bWJuYWlsLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRlZGU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICYtdGh1bWJuYWlsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVyOiAjOTc5Nzk3O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcclxuXHJcbiRjb2xvci1kYXJrZXN0OiAjMDAwO1xyXG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xyXG5cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLXNsb3c6IC41cztcclxuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcclxuJGZvbnQtc2l6ZS1tOiAxcmVtOyAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxyXG4kZm9udC1zaXplLXh4bDogMS41NjI1cmVtOyAgIC8vIDI1cHhcclxuXHJcbi8vIE1lZGlhc1xyXG4kbWVkaWEtc2NyZWVuLXh4czogMzYwcHg7XHJcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xyXG4kbWVkaWEtc2NyZWVuLW06IDEwMjRweDtcclxuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XHJcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcclxuJG1lZGlhLXNjcmVlbi14eGw6IDE2ODBweDtcclxuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItbGlnaHQ6IDFweDtcclxuXHJcbi8vIEltYWdlc1xyXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XHJcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Wpjk":
    /*!**************************************************!*\
      !*** ./src/modules/orders/orders.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Wpjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-orders-wrapper {\n  background-color: #fff;\n  padding-bottom: 4rem;\n  padding-top: 4rem;\n}\n.esh-orders-titles {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  margin-bottom: 1rem;\n  padding-left: 5rem;\n  text-transform: uppercase;\n}\n.esh-orders-item {\n  font-size: 1rem;\n  font-weight: 400;\n  height: 6rem;\n  line-height: 6rem;\n  padding-left: 5rem;\n  position: relative;\n}\n.esh-orders-link {\n  color: #f66f61;\n  text-decoration: none;\n  transition: color 0.35s;\n}\n.esh-orders-link:hover {\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxzQkNJVTtFREhWLG9CQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU1JO0VBQ0ksY0NQaUI7RURRakIsbUJDZU07RURkTixnQkNNZ0I7RURMaEIsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSlI7QUFPSTtFQUVJLGVDS007RURKTixnQkNGYTtFREdiLFlBSFM7RUFJVCxpQkFKUztFQUtULGtCQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQVNJO0VBQ0ksY0M3QlE7RUQ4QlIscUJBQUE7RUFDQSx1QkFBQTtBQVBSO0FBU1E7RUFDSSxjQ2hDTTtBRHlCbEIiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmVzaC1vcmRlcnMge1xyXG5cclxuICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlcyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktYnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWxpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICAkaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICYtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "ZCVb":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/identity/identity.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZCVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-identity\">\r\n    <section class=\"esh-identity-section\"\r\n             *ngIf=\"!authenticated\">\r\n        <div class=\"u-cursor-pointer pt-2 pb-2\" (click)=\"login()\">\r\n\r\n            <div class=\"esh-identity-name d-flex align-items-center\">LOGIN \r\n                <img class=\"esh-identity-image ml-2\" src=\"assets/images/user.svg\">\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"esh-identity-section u-cursor-pointer pt-2 pb-2\"\r\n         *ngIf=\"authenticated\">\r\n\r\n        <div class=\"esh-identity-name\">{{userName}}</div>\r\n        <img class=\"esh-identity-image ml-2\" src=\"assets/images/user.svg\">\r\n    </section>\r\n\r\n    <section class=\"esh-identity-drop\"\r\n             *ngIf=\"authenticated\">\r\n\r\n        <div class=\"esh-identity-item\"\r\n             [routerLink]=\"['orders']\">\r\n            <div class=\"esh-identity-name\">My orders</div>\r\n        </div>\r\n\r\n        <div class=\"esh-identity-item\"\r\n             (click)=\"logoutClicked($event)\">\r\n            <div class=\"esh-identity-name\">Log Out</div>\r\n        </div>\r\n    </section>\r\n</div>\r\n";
      /***/
    },

    /***/
    "aMt0":
    /*!************************************************!*\
      !*** ./src/modules/orders/orders.component.ts ***!
      \************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function aMt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _orders_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orders.component.scss */
      "Wpjk");
      /* harmony import */


      var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders.component.html */
      "jomK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.service */
      "J6to");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/services/signalr.service */
      "HClI");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(service, configurationService, signalrService) {
          _classCallCheck(this, OrdersComponent);

          this.service = service;
          this.configurationService = configurationService;
          this.signalrService = signalrService;
          this.interval = null;
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            if (this.configurationService.isReady) {
              this.getOrders();
            } else {
              this.configurationService.settingsLoaded$.subscribe(function (x) {
                _this23.getOrders();
              });
            }

            this.signalrService.msgReceived$.subscribe(function (x) {
              return _this23.getOrders();
            });
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this24 = this;

            this.errorReceived = false;
            this.service.getOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
              return _this24.handleError(err);
            })).subscribe(function (orders) {
              _this24.orders = orders;
              _this24.oldOrders = _this24.orders;
              console.log('orders items retrieved: ' + orders.length);
            });
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(orderNumber) {
            var _this25 = this;

            this.errorReceived = false;
            this.service.cancelOrder(orderNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
              return _this25.handleError(err);
            })).subscribe(function () {
              console.log('order canceled: ' + orderNumber);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.errorReceived = true;
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]["throw"](error);
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ctorParameters = function () {
        return [{
          type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]
        }, {
          type: _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]
        }];
      };

      OrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders .esh-orders .mb-5',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]])], OrdersComponent);
      /***/
    },

    /***/
    "aTV3":
    /*!**************************************************************!*\
      !*** ./src/modules/shared/components/identity/identity.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function aTV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-identity {\n  position: relative;\n}\n.esh-identity-section {\n  width: 100%;\n}\n.esh-identity-name {\n  font-size: 0.875rem;\n  display: inline-block;\n}\n.esh-identity-name--upper {\n  text-transform: uppercase;\n}\n.esh-identity-image {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-identity-drop {\n  background: #fff;\n  height: 0;\n  min-width: 10rem;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 2.5rem;\n  transition: height 0.35s;\n}\n.esh-identity:hover .esh-identity-drop {\n  height: 5rem;\n}\n.esh-identity-item {\n  color: #f66f61;\n  cursor: pointer;\n  font-size: 0.875rem;\n  line-height: 2.5rem;\n  padding: 0 1rem;\n  transition: all 0.35s;\n}\n.esh-identity-item:hover {\n  background-color: #f3f4f3;\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWRlbnRpdHkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBSUk7RUFDSSxtQkNlTTtFRGROLHFCQUFBO0FBRlI7QUFJUTtFQUNJLHlCQUFBO0FBRlo7QUFNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSlI7QUFPSTtFQUNJLGdCQ2ZVO0VEZ0JWLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBTFI7QUFRSTtFQUNJLFlBQUE7QUFOUjtBQVNJO0VBQ0ksY0N0Q1E7RUR1Q1IsZUFBQTtFQUNBLG1CQ2hCTTtFRGlCTixtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVBSO0FBU1E7RUFDSSx5QkN6Q2dCO0VEMENoQixjQzdDTTtBRHNDbEIiLCJmaWxlIjoiaWRlbnRpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5lc2gtaWRlbnRpdHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYtc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtcztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICYtLXVwcGVyIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1kcm9wIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMi41cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciAmLWRyb3Age1xyXG4gICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0O1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "abXn":
    /*!*********************!*\
      !*** ./src/guid.ts ***!
      \*********************/

    /*! exports provided: Guid */

    /***/
    function abXn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Guid", function () {
        return Guid;
      });

      var Guid = /*#__PURE__*/function () {
        function Guid() {
          _classCallCheck(this, Guid);
        }

        _createClass(Guid, null, [{
          key: "newGuid",
          value: function newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = Math.random() * 16 | 0,
                  v = c == 'x' ? r : r & 0x3 | 0x8;
              return v.toString(16);
            });
          }
        }]);

        return Guid;
      }();
      /***/

    },

    /***/
    "agb9":
    /*!************************************************************!*\
      !*** ./src/modules/shared/components/identity/identity.ts ***!
      \************************************************************/

    /*! exports provided: Identity */

    /***/
    function agb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Identity", function () {
        return Identity;
      });
      /* harmony import */


      var _raw_loader_identity_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./identity.html */
      "ZCVb");
      /* harmony import */


      var _identity_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./identity.scss */
      "aTV3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/security.service */
      "x8Yk");
      /* harmony import */


      var _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/signalr.service */
      "HClI");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var Identity = /*#__PURE__*/function () {
        function Identity(service, signalrService) {
          _classCallCheck(this, Identity);

          this.service = service;
          this.signalrService = signalrService;
          this.authenticated = false;
          this.userName = '';
        }

        _createClass(Identity, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.subscription = this.service.authenticationChallenge$.subscribe(function (res) {
              _this26.authenticated = res;
              _this26.userName = _this26.service.UserData.email;
            });

            if (window.location.hash) {
              this.service.AuthorizedCallback();
            }

            console.log('identity component, checking authorized' + this.service.IsAuthorized);
            this.authenticated = this.service.IsAuthorized;

            if (this.authenticated) {
              if (this.service.UserData) this.userName = this.service.UserData.email;
            }
          }
        }, {
          key: "logoutClicked",
          value: function logoutClicked(event) {
            event.preventDefault();
            console.log('Logout clicked');
            this.logout();
          }
        }, {
          key: "login",
          value: function login() {
            this.service.Authorize();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.signalrService.stop();
            this.service.Logoff();
          }
        }]);

        return Identity;
      }();

      Identity.ctorParameters = function () {
        return [{
          type: _services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
        }, {
          type: _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__["SignalrService"]
        }];
      };

      Identity = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-identity',
        template: _raw_loader_identity_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_identity_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"], _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__["SignalrService"]])], Identity);
      /***/
    },

    /***/
    "b7Aq":
    /*!**************************************************************!*\
      !*** ./src/modules/shared/services/configuration.service.ts ***!
      \**************************************************************/

    /*! exports provided: ConfigurationService */

    /***/
    function b7Aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationService", function () {
        return ConfigurationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      "tfFe");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ConfigurationService = /*#__PURE__*/function () {
        function ConfigurationService(http, storageService) {
          _classCallCheck(this, ConfigurationService);

          this.http = http;
          this.storageService = storageService; // observable that is fired when settings are loaded from server

          this.settingsLoadedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
          this.isReady = false;
        }

        _createClass(ConfigurationService, [{
          key: "load",
          value: function load() {
            var _this27 = this;

            var baseURI = document.baseURI.endsWith('/') ? document.baseURI : "".concat(document.baseURI, "/");
            var url = "".concat(baseURI, "Home/Configuration");
            this.http.get(url).subscribe(function (response) {
              console.log('server settings loaded');
              _this27.serverSettings = response;
              console.log(_this27.serverSettings);

              _this27.storageService.store('identityUrl', _this27.serverSettings.identityUrl);

              _this27.storageService.store('purchaseUrl', _this27.serverSettings.purchaseUrl);

              _this27.storageService.store('signalrHubUrl', _this27.serverSettings.signalrHubUrl);

              _this27.storageService.store('activateCampaignDetailFunction', _this27.serverSettings.activateCampaignDetailFunction);

              _this27.isReady = true;

              _this27.settingsLoadedSource.next();
            });
          }
        }]);

        return ConfigurationService;
      }();

      ConfigurationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }];
      };

      ConfigurationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])], ConfigurationService);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fGsj":
    /*!*****************************************************!*\
      !*** ./src/modules/shared/services/data.service.ts ***!
      \*****************************************************/

    /*! exports provided: DataService */

    /***/
    function fGsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./security.service */
      "x8Yk");
      /* harmony import */


      var _guid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../guid */
      "abXn");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; // Implementing a Retry-Circuit breaker policy 
      // is pending to do for the SPA app


      var DataService = /*#__PURE__*/function () {
        function DataService(http, securityService) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.securityService = securityService;
        }

        _createClass(DataService, [{
          key: "get",
          value: function get(url, params) {
            var options = {};
            this.setHeaders(options);
            return this.http.get(url, options).pipe( // retry(3), // retry a failed request up to 3 times
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "postWithId",
          value: function postWithId(url, data, params) {
            return this.doPost(url, data, true, params);
          }
        }, {
          key: "post",
          value: function post(url, data, params) {
            return this.doPost(url, data, false, params);
          }
        }, {
          key: "putWithId",
          value: function putWithId(url, data, params) {
            return this.doPut(url, data, true, params);
          }
        }, {
          key: "doPost",
          value: function doPost(url, data, needId, params) {
            var options = {};
            this.setHeaders(options, needId);
            return this.http.post(url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "delete",
          value: function _delete(url, params) {
            var options = {};
            this.setHeaders(options);
            console.log('data.service deleting');
            this.http["delete"](url, options).subscribe(function (res) {
              console.log('deleted');
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('Client side network error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error('Backend - ' + "status: ".concat(error.status, ", ") + "statusText: ".concat(error.statusText, ", ") + "message: ".concat(error.error.message));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'server error');
          }
        }, {
          key: "doPut",
          value: function doPut(url, data, needId, params) {
            var options = {};
            this.setHeaders(options, needId);
            return this.http.put(url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "setHeaders",
          value: function setHeaders(options, needId) {
            if (needId && this.securityService) {
              options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('authorization', 'Bearer ' + this.securityService.GetToken()).append('x-requestid', _guid__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid());
            } else if (this.securityService) {
              options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('authorization', 'Bearer ' + this.securityService.GetToken());
            }
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]
        }];
      };

      DataService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]])], DataService);
      /***/
    },

    /***/
    "fvGp":
    /*!***********************************!*\
      !*** ./src/modules/app.module.ts ***!
      \***********************************/

    /*! exports provided: AppModule */

    /***/
    function fvGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.routes */
      "xfXm");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.service */
      "ywjI");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "x8Oy");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/shared.module */
      "uQzi");
      /* harmony import */


      var _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./catalog/catalog.module */
      "qdmN");
      /* harmony import */


      var _orders_orders_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./orders/orders.module */
      "EDuJ");
      /* harmony import */


      var _basket_basket_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./basket/basket.module */
      "uIi5");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), _app_routes__WEBPACK_IMPORTED_MODULE_4__["routing"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // Only module that app module loads
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(), _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__["CatalogModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_9__["OrdersModule"], _basket_basket_module__WEBPACK_IMPORTED_MODULE_10__["BasketModule"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "gL9z":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/basket/basket.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function gL9z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-basket\">\r\n    <div class=\"container\">\r\n        <h1 class=\"mb-4 mt-5\">[ Shopping Bag ]</h1>\r\n        <div *ngFor=\"let errorMessage of errorMessages\">\r\n            <div class=\"esh-basket-items-margin-left1 row\">\r\n                <div class=\"alert alert-warning\" role=\"alert\">&nbsp;{{errorMessage}}</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-6 col-md-8 col-lg-9\">\r\n                <div class=\"esh-basket-items row\">\r\n                    <div *ngFor=\"let item of basket?.items\" class=\"col-12 col-md-6 col-lg-4\">\r\n                        <article class=\"esh-basket-item\">\r\n                            <div class=\"esh-basket-thumbnail-wrapper\">\r\n                                <div class=\"esh-basket-delete\" (click)=\"deleteItem(item.id)\">\r\n                                    <img class=\"esh-basket-delete-svg\" src=\"assets/images/delete.svg\" />\r\n                                </div>\r\n                                <img class=\"esh-basket-thumbnail\" src=\"{{item.pictureUrl}}\"/>\r\n                            </div>\r\n                            <div class=\"esh-basket-title\">{{item.productName}}</div>\r\n                            <div class=\"esh-basket-description divider d-flex align-items-center justify-content-between\">\r\n                                <div class=\"\">$ {{item.unitPrice | number:'.2-2'}}</div>\r\n                                <div class=\"esh-basket-buttons d-flex justify-content-center\">\r\n                                    <button \r\n                                        [ngClass]=\"{'esh-basket-button': true, 'is-disabled': item.quantity === 1}\" \r\n                                        (click)=\"itemQuantityChanged(item, item.quantity-1)\">\r\n                                            <img \r\n                                            class=\"esh-basket-button-svg\" \r\n                                            src=\"assets/images/minus.svg\" />\r\n                                    </button>\r\n                                    <div class=\"esh-basket-quantity\">{{item.quantity}}</div>\r\n                                    <button \r\n                                        class=\"esh-basket-button\" \r\n                                        (click)=\"itemQuantityChanged(item, item.quantity+1)\">\r\n                                            <img \r\n                                            class=\"esh-basket-button-svg\" \r\n                                            src=\"assets/images/plus.svg\" />\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"esh-basket-price text-right\">$ {{(item.unitPrice * item.quantity) | number:'.2-2'}}</div>\r\n                            </div>\r\n                            <div class=\"\" *ngIf=\"item.oldUnitPrice > 0\">\r\n                                &nbsp;Note that the price of this article changed in our Catalog. The old price when you originally added it to the basket was $ {{item.oldUnitPrice}}\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-md-4 col-lg-3\">\r\n                <div class=\"esh-basket-checkout p-4\">\r\n                    <h2 class=\"esh-basket-checkout-title\">Your shopping bag</h2>\r\n                    <div class=\"mb-3 u-text-sm\">({{basket?.items ? basket?.items.length : 0}} items)</div>\r\n\r\n                    <div class=\"d-flex justify-content-between align-items-center font-weight-bolder\">\r\n                        <div>TOTAL</div>\r\n                        <div>${{totalPrice | number:'.2-2'}}</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"divider u-background-brightest p-4\">\r\n                    <div>\r\n                        <button class=\"btn btn-primary u-width-100 u-minwidth-unset\" (click)=\"checkOut($event)\">Checkout</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-4\">\r\n                    <a class=\"btn btn-secondary u-width-100 u-minwidth-unset\" routerLink=\"/catalog\">Continue Shopping</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "h7ng":
    /*!***************************************************************!*\
      !*** ./src/modules/shared/services/basket.wrapper.service.ts ***!
      \***************************************************************/

    /*! exports provided: BasketWrapperService */

    /***/
    function h7ng(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketWrapperService", function () {
        return BasketWrapperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/security.service */
      "x8Yk");
      /* harmony import */


      var _guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../guid */
      "abXn");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BasketWrapperService = /*#__PURE__*/function () {
        function BasketWrapperService(identityService) {
          _classCallCheck(this, BasketWrapperService);

          this.identityService = identityService; // observable that is fired when a product is added to the cart

          this.addItemToBasketSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.addItemToBasket$ = this.addItemToBasketSource.asObservable();
          this.orderCreatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.orderCreated$ = this.orderCreatedSource.asObservable();
        }

        _createClass(BasketWrapperService, [{
          key: "addItemToBasket",
          value: function addItemToBasket(item) {
            if (this.identityService.IsAuthorized) {
              var basketItem = {
                pictureUrl: item.pictureUri,
                productId: item.id,
                productName: item.name,
                quantity: 1,
                unitPrice: item.price,
                id: _guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(),
                oldUnitPrice: 0
              };
              this.addItemToBasketSource.next(basketItem);
            } else {
              this.identityService.Authorize();
            }
          }
        }, {
          key: "orderCreated",
          value: function orderCreated() {
            this.orderCreatedSource.next();
          }
        }]);

        return BasketWrapperService;
      }();

      BasketWrapperService.ctorParameters = function () {
        return [{
          type: _services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]
        }];
      };

      BasketWrapperService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]])], BasketWrapperService);
      /***/
    },

    /***/
    "iXAA":
    /*!********************************************************!*\
      !*** ./src/modules/shared/components/pager/pager.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function iXAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-pager-wrapper {\n  padding-top: 1rem;\n  text-align: center;\n}\n.esh-pager-item {\n  font-size: 0.875rem;\n  margin: 0 5vw;\n}\n.esh-pager-item.is-disabled {\n  opacity: 0;\n  pointer-events: none;\n}\n.esh-pager-item--navigable {\n  cursor: pointer;\n  display: inline-block;\n}\n.esh-pager-item--navigable:hover {\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxtQkNlTTtFRGROLGFBQUE7QUFKUjtBQU1RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUxaO0FBT1k7RUFDSSxjQ3BCRTtBRGVsQiIsImZpbGUiOiJwYWdlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmVzaC1wYWdlciB7XHJcblxyXG4gICAgJi13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtcztcclxuICAgICAgICBtYXJnaW46IDAgNXZ3O1xyXG5cclxuICAgICAgICAmLmlzLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1uYXZpZ2FibGUge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjZjY2ZjYxO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcclxuJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ6ICM4MTgyOGQ7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xyXG5cclxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XHJcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XHJcblxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG4kYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ6IC4zNXM7XHJcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtczogLjg3NXJlbTsgICAgLy8gMTRweFxyXG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XHJcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxyXG5cclxuLy8gTWVkaWFzXHJcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcclxuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XHJcbiRtZWRpYS1zY3JlZW4tczogNzY4cHg7XHJcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xyXG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcclxuJG1lZGlhLXNjcmVlbi14bDogMTQ0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1saWdodDogMXB4O1xyXG5cclxuLy8gSW1hZ2VzXHJcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcclxuJGltYWdlLWFycm93X2Rvd246ICcjeyRpbWFnZV9wYXRofWFycm93LWRvd24ucG5nJztcclxuIl19 */";
      /***/
    },

    /***/
    "jomK":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function jomK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"esh-orders\">\r\n    <div class=\"container\">\r\n        <h1 class=\"mb-4 mt-5\">[ Order List ]</h1>\r\n        <div class=\"esh-orders-alert alert\" role=\"alert\" [hidden]=\"!errorReceived\">\r\n            Error requesting order list, please try later on\r\n        </div>\r\n\r\n        <div class=\"esh-orders-wrapper\">\r\n            <article class=\"esh-orders-titles row\">\r\n                <section class=\"col-1\"></section>\r\n                <section class=\"col-3\">Date</section>\r\n                <section class=\"col-2\">Total</section>\r\n                <section class=\"col-2\">Status</section>\r\n                <section class=\"col-2\"></section>\r\n                <section class=\"col-2\"></section>\r\n            </article>\r\n    \r\n            <article class=\"esh-orders-item divider row\"\r\n                     *ngFor=\"let order of orders\">\r\n                <section class=\"col-1\">{{order.ordernumber}}</section>\r\n                <section class=\"col-3\">{{order.date | date:'short'}}</section>\r\n                <section class=\"col-2\">${{order.total}}</section>\r\n                <section class=\"col-2\">{{order.status}}</section>\r\n                <section class=\"col-2\">\r\n                    <a *ngIf=\"order.status.toLowerCase() === 'submitted'\" (click)=\"cancelOrder(order.ordernumber)\" class=\"esh-orders-link u-cursor-pointer\">Cancel</a>\r\n                </section>\r\n                <section class=\"col-2\">\r\n                    <a class=\"esh-orders-link\" routerLink=\"/orders/{{order.ordernumber}}\">Details</a>\r\n                </section>\r\n            </article>\r\n    \r\n            <aside class=\"d-flex justify-content-end mt-5 pr-5\">\r\n                <a class=\"btn btn-secondary\" routerLink=\"/catalog\">Continue Shopping</a>\r\n            </aside>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "oFGJ":
    /*!**********************************************************!*\
      !*** ./src/modules/shared/components/header/header.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function oFGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".esh-header {\n  background-color: #f66f61;\n  height: 4rem;\n}\n.esh-header-back {\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 4rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: color 0.35s;\n}\n.esh-header-back:hover {\n  color: #fff;\n  transition: color 0.35s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLHlCQ0pZO0VES1osWUFIZ0I7QUFBcEI7QUFLSTtFQUNJLCtCQUFBO0VBQ0EsaUJBUFk7RUFRWixxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFIUjtBQUtRO0VBQ0ksV0NQTTtFRFFOLHVCQUFBO0FBSFoiLCJmaWxlIjoiaGVhZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZXNoLWhlYWRlciB7XHJcbiAgICAkaGVhZGVyLWhlaWdodDogNHJlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XHJcblxyXG4gICAgJi1iYWNrIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgkY29sb3ItYnJpZ2h0ZXN0LCAuNSk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XHJcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVyOiAjOTc5Nzk3O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcclxuXHJcbiRjb2xvci1kYXJrZXN0OiAjMDAwO1xyXG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xyXG5cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xyXG4kYW5pbWF0aW9uLXNwZWVkLXNsb3c6IC41cztcclxuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcclxuJGZvbnQtc2l6ZS1tOiAxcmVtOyAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxyXG4kZm9udC1zaXplLXh4bDogMS41NjI1cmVtOyAgIC8vIDI1cHhcclxuXHJcbi8vIE1lZGlhc1xyXG4kbWVkaWEtc2NyZWVuLXh4czogMzYwcHg7XHJcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xyXG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xyXG4kbWVkaWEtc2NyZWVuLW06IDEwMjRweDtcclxuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XHJcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcclxuJG1lZGlhLXNjcmVlbi14eGw6IDE2ODBweDtcclxuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItbGlnaHQ6IDFweDtcclxuXHJcbi8vIEltYWdlc1xyXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XHJcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "pWar":
    /*!**********************************************************************************!*\
      !*** ./src/modules/shared/components/page-not-found/page-not-found.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function pWar(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "F5ZD");
      /* harmony import */


      var _page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-not-found.component.scss */
      "tAv4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ctorParameters = function () {
        return [];
      };

      PageNotFoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'appc-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], PageNotFoundComponent);
      /***/
    },

    /***/
    "pujc":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders-new/orders-new.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pujc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1 class=\"mb-4 mt-5\">[ Checkout ]</h1>\r\n    <div class=\"alert\" role=\"alert\" [hidden]=\"!errorReceived\">\r\n        Not possible to create a new order, please try later on\r\n    </div>\r\n    <form [formGroup]=\"newOrderForm\" (ngSubmit)=\"submitForm(newOrderForm.value)\">\r\n        <section class=\"u-background-brightest p-5\">\r\n            <h2 class=\"mb-4\">Shipping Address</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['street'].valid && newOrderForm.controls['street'].touched}\">\r\n                        <label>Address</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"Street\" [formControl]=\"newOrderForm.controls['street']\">\r\n                        <div *ngIf=\"newOrderForm.controls['street'].hasError('required') && newOrderForm.controls['street'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['city'].valid && newOrderForm.controls['city'].touched}\">\r\n                        <label>City</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"City\" [formControl]=\"newOrderForm.controls['city']\">\r\n                        <div *ngIf=\"newOrderForm.controls['city'].hasError('required') && newOrderForm.controls['city'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['state'].valid && newOrderForm.controls['state'].touched}\">\r\n                        <label>State</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"state\" [formControl]=\"newOrderForm.controls['state']\">\r\n                        <div *ngIf=\"newOrderForm.controls['state'].hasError('required') && newOrderForm.controls['state'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['country'].valid && newOrderForm.controls['country'].touched}\">\r\n                        <label>Country</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"country\" [formControl]=\"newOrderForm.controls['country']\">\r\n                        <div *ngIf=\"newOrderForm.controls['country'].hasError('required') && newOrderForm.controls['country'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <h2 class=\"mt-5 mb-4\">Payment method</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['cardnumber'].valid && newOrderForm.controls['cardnumber'].touched}\">\r\n                        <label>Card number</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"000000000000000\" [formControl]=\"newOrderForm.controls['cardnumber']\">\r\n                        <div *ngIf=\"newOrderForm.controls['cardnumber'].hasError('required') && newOrderForm.controls['cardnumber'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['cardholdername'].valid && newOrderForm.controls['cardholdername'].touched}\">\r\n                        <label>Cardholder name</label>\r\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"Card holder\" [formControl]=\"newOrderForm.controls['cardholdername']\">\r\n                        <div *ngIf=\"newOrderForm.controls['cardholdername'].hasError('required') && newOrderForm.controls['cardholdername'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['expirationdate'].valid && newOrderForm.controls['expirationdate'].touched}\">\r\n                        <label>Expiration date</label>\r\n                        <input class=\"form-control form-input w-50 u-maxwidth-unset\" type=\"text\" placeholder=\"MM/YY\" [formControl]=\"newOrderForm.controls['expirationdate']\">\r\n                        <div *ngIf=\"newOrderForm.controls['expirationdate'].hasError('required') && newOrderForm.controls['expirationdate'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['securitycode'].valid && newOrderForm.controls['securitycode'].touched}\">\r\n                        <label class=\"esh-orders_new-title\">Security code</label>\r\n                        <input class=\"form-control form-input w-50 u-maxwidth-unset\" type=\"text\" placeholder=\"000\" [formControl]=\"newOrderForm.controls['securitycode']\">\r\n                        <div *ngIf=\"newOrderForm.controls['securitycode'].hasError('required') && newOrderForm.controls['securitycode'].touched\" class=\"alert alert-danger\">Required field.</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <h2 class=\"mt-5 mb-4\">Order details</h2>\r\n            <article class=\"divider divider--bottom d-flex align-items-center pb-3 mt-3 u-text-sm\"\r\n                     *ngFor=\"let item of order.orderItems\">\r\n                <div class=\"esh-orders_new-thumbnail-container\">\r\n                    <div class=\"esh-orders_new-thumbnail-wrapper\">\r\n                        <img class=\"esh-orders_new-thumbnail\" src=\"{{item.pictureurl}}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row w-100 ml-3\">\r\n                    <div class=\"col-6\">{{item.productname}}</div>\r\n                    <div class=\"col-2\">$ {{item.unitprice | number:'.2-2'}}</div>\r\n                    <div class=\"col-2\">{{item.units}}</div>\r\n                    <div class=\"col-2 text-right\">$ {{(item.units * item.unitprice) | number:'.2-2'}}</div>\r\n                </div>\r\n            </article>\r\n\r\n            <div class=\"divider d-flex align-items-center justify-content-end mb-4 pt-4 text-uppercase u-text-xl\">\r\n                <div>Total</div>\r\n                <div class=\"ml-3\">${{ order.total | number:'.2-2'}}</div>\r\n            </div>\r\n\r\n            <div class=\"esh-orders_new-buttons d-flex justify-content-end align-items-center\">\r\n                <a class=\"btn btn-secondary\" routerLink=\"/basket\">Back to basket</a>\r\n\r\n                <button class=\"btn btn-primary ml-3\" [disabled]=\"!newOrderForm.valid || isOrderProcessing\">Place Order</button>\r\n            </div>\r\n        </section>\r\n    </form>\r\n</div>";
      /***/
    },

    /***/
    "qdmN":
    /*!***********************************************!*\
      !*** ./src/modules/catalog/catalog.module.ts ***!
      \***********************************************/

    /*! exports provided: CatalogModule */

    /***/
    function qdmN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogModule", function () {
        return CatalogModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "uQzi");
      /* harmony import */


      var _catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./catalog.component */
      "9fF1");
      /* harmony import */


      var _catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog.service */
      "GIIC");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CatalogModule = function CatalogModule() {
        _classCallCheck(this, CatalogModule);
      };

      CatalogModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]],
        providers: [_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"]]
      })], CatalogModule);
      /***/
    },

    /***/
    "tAv4":
    /*!************************************************************************************!*\
      !*** ./src/modules/shared/components/page-not-found/page-not-found.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function tAv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tfFe":
    /*!********************************************************!*\
      !*** ./src/modules/shared/services/storage.service.ts ***!
      \********************************************************/

    /*! exports provided: StorageService */

    /***/
    function tfFe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this.storage = sessionStorage; // localStorage;
        }

        _createClass(StorageService, [{
          key: "retrieve",
          value: function retrieve(key) {
            var item = this.storage.getItem(key);

            if (item && item !== 'undefined') {
              return JSON.parse(this.storage.getItem(key));
            }

            return;
          }
        }, {
          key: "store",
          value: function store(key, value) {
            this.storage.setItem(key, JSON.stringify(value));
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [];
      };

      StorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], StorageService);
      /***/
    },

    /***/
    "uIi5":
    /*!*********************************************!*\
      !*** ./src/modules/basket/basket.module.ts ***!
      \*********************************************/

    /*! exports provided: BasketModule */

    /***/
    function uIi5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketModule", function () {
        return BasketModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      "uQzi");
      /* harmony import */


      var _basket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basket.component */
      "AiEP");
      /* harmony import */


      var _basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./basket-status/basket-status.component */
      "FwHL");
      /* harmony import */


      var _basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./basket.service */
      "GsTr");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var BasketModule_1;

      var BasketModule = BasketModule_1 = /*#__PURE__*/function () {
        function BasketModule() {
          _classCallCheck(this, BasketModule);
        }

        _createClass(BasketModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: BasketModule_1,
              providers: [// Providers
              _basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]]
            };
          }
        }]);

        return BasketModule;
      }();

      BasketModule = BasketModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        declarations: [_basket_component__WEBPACK_IMPORTED_MODULE_2__["BasketComponent"], _basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__["BasketStatusComponent"]],
        providers: [_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]],
        exports: [_basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__["BasketStatusComponent"]]
      })], BasketModule);
      /***/
    },

    /***/
    "uQzi":
    /*!*********************************************!*\
      !*** ./src/modules/shared/shared.module.ts ***!
      \*********************************************/

    /*! exports provided: SharedModule */

    /***/
    function uQzi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/data.service */
      "fGsj");
      /* harmony import */


      var _services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/basket.wrapper.service */
      "h7ng");
      /* harmony import */


      var _services_security_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/security.service */
      "x8Yk");
      /* harmony import */


      var _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/configuration.service */
      "b7Aq");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/storage.service */
      "tfFe");
      /* harmony import */


      var _services_signalr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/signalr.service */
      "HClI");
      /* harmony import */


      var _components_pager_pager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/pager/pager */
      "+fjr");
      /* harmony import */


      var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/header/header */
      "QilE");
      /* harmony import */


      var _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/identity/identity */
      "agb9");
      /* harmony import */


      var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/page-not-found/page-not-found.component */
      "pWar");
      /* harmony import */


      var _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pipes/uppercase.pipe */
      "ROcs");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SharedModule_1; // Services
      // Components:
      // Pipes:

      var SharedModule = SharedModule_1 = /*#__PURE__*/function () {
        function SharedModule() {
          _classCallCheck(this, SharedModule);
        }

        _createClass(SharedModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: SharedModule_1,
              providers: [// Providers
              _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"], _services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _services_signalr_service__WEBPACK_IMPORTED_MODULE_11__["SignalrService"]]
            };
          }
        }]);

        return SharedModule;
      }();

      SharedModule = SharedModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], // No need to export as these modules don't expose any components/directive etc'
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"]],
        declarations: [_components_pager_pager__WEBPACK_IMPORTED_MODULE_12__["Pager"], _components_header_header__WEBPACK_IMPORTED_MODULE_13__["Header"], _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__["Identity"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__["UppercasePipe"]],
        exports: [// Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], // Providers, Components, directive, pipes
        _components_pager_pager__WEBPACK_IMPORTED_MODULE_12__["Pager"], _components_header_header__WEBPACK_IMPORTED_MODULE_13__["Header"], _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__["Identity"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__["UppercasePipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "x8Oy":
    /*!**************************************!*\
      !*** ./src/modules/app.component.ts ***!
      \**************************************/

    /*! exports provided: AppComponent */

    /***/
    function x8Oy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component.scss */
      "Qdu6");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "Ah7w");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/services/security.service */
      "x8Yk");
      /* harmony import */


      var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/services/configuration.service */
      "b7Aq");
      /* harmony import */


      var _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/services/signalr.service */
      "HClI");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /*
       * App Component
       * Top Level Component
       */


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(titleService, router, securityService, configurationService, signalrService, toastr, vcr) {
          _classCallCheck(this, AppComponent);

          this.titleService = titleService;
          this.router = router;
          this.securityService = securityService;
          this.configurationService = configurationService;
          this.signalrService = signalrService;
          this.toastr = toastr;
          this.Authenticated = false; // TODO: Set Taster Root (Overlay) container
          //this.toastr.setRootViewContainerRef(vcr);

          this.Authenticated = this.securityService.IsAuthorized;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            console.log('app on init');
            this.subscription = this.securityService.authenticationChallenge$.subscribe(function (res) {
              return _this28.Authenticated = res;
            }); //Get configuration from server environment variables:

            console.log('configuration');
            this.configurationService.load();
          }
        }, {
          key: "setTitle",
          value: function setTitle(newTitle) {
            this.titleService.setTitle('eShopOnContainers');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]
        }, {
          type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]
        }, {
          type: _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'esh-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
      }), __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]])], AppComponent);
      /***/
    },

    /***/
    "x8Yk":
    /*!*********************************************************!*\
      !*** ./src/modules/shared/services/security.service.ts ***!
      \*********************************************************/

    /*! exports provided: SecurityService */

    /***/
    function x8Yk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityService", function () {
        return SecurityService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./configuration.service */
      "b7Aq");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./storage.service */
      "tfFe");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SecurityService = /*#__PURE__*/function () {
        function SecurityService(_http, _router, route, _configurationService, _storageService) {
          var _this29 = this;

          _classCallCheck(this, SecurityService);

          this._http = _http;
          this._router = _router;
          this.route = route;
          this._configurationService = _configurationService;
          this._storageService = _storageService;
          this.authenticationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.authenticationChallenge$ = this.authenticationSource.asObservable();
          this.authorityUrl = ''; //private retrieve(key: string): any {
          //    let item = this.storage.getItem(key);
          //    if (item && item !== 'undefined') {
          //        return JSON.parse(this.storage.getItem(key));
          //    }
          //    return;
          //}
          //private store(key: string, value: any) {
          //    this.storage.setItem(key, JSON.stringify(value));
          //}

          this.getUserData = function () {
            if (_this29.authorityUrl === '') {
              _this29.authorityUrl = _this29.storage.retrieve('IdentityUrl');
            }

            var options = _this29.setHeaders();

            return _this29._http.get("".concat(_this29.authorityUrl, "/connect/userinfo"), options).pipe(function (info) {
              return info;
            });
          };

          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.headers.append('Content-Type', 'application/json');
          this.headers.append('Accept', 'application/json');
          this.storage = _storageService;

          this._configurationService.settingsLoaded$.subscribe(function (x) {
            _this29.authorityUrl = _this29._configurationService.serverSettings.identityUrl;

            _this29.storage.store('IdentityUrl', _this29.authorityUrl);
          });

          if (this.storage.retrieve('IsAuthorized') !== '') {
            this.IsAuthorized = this.storage.retrieve('IsAuthorized');
            this.authenticationSource.next(true);
            this.UserData = this.storage.retrieve('userData');
          }
        }

        _createClass(SecurityService, [{
          key: "GetToken",
          value: function GetToken() {
            return this.storage.retrieve('authorizationData');
          }
        }, {
          key: "ResetAuthorizationData",
          value: function ResetAuthorizationData() {
            this.storage.store('authorizationData', '');
            this.storage.store('authorizationDataIdToken', '');
            this.IsAuthorized = false;
            this.storage.store('IsAuthorized', false);
          }
        }, {
          key: "SetAuthorizationData",
          value: function SetAuthorizationData(token, id_token) {
            var _this30 = this;

            if (this.storage.retrieve('authorizationData') !== '') {
              this.storage.store('authorizationData', '');
            }

            this.storage.store('authorizationData', token);
            this.storage.store('authorizationDataIdToken', id_token);
            this.IsAuthorized = true;
            this.storage.store('IsAuthorized', true);
            this.getUserData().subscribe(function (data) {
              _this30.UserData = data;

              _this30.storage.store('userData', data); // emit observable


              _this30.authenticationSource.next(true);

              window.location.href = location.origin;
            }, function (error) {
              return _this30.HandleError(error);
            }, function () {
              console.log(_this30.UserData);
            });
          }
        }, {
          key: "Authorize",
          value: function Authorize() {
            this.ResetAuthorizationData();
            var authorizationUrl = this.authorityUrl + '/connect/authorize';
            var client_id = 'js';
            var redirect_uri = location.origin + '/';
            var response_type = 'id_token token';
            var scope = 'openid profile orders basket webshoppingagg orders.signalrhub';
            var nonce = 'N' + Math.random() + '' + Date.now();
            var state = Date.now() + '' + Math.random();
            this.storage.store('authStateControl', state);
            this.storage.store('authNonce', nonce);
            var url = authorizationUrl + '?' + 'response_type=' + encodeURI(response_type) + '&' + 'client_id=' + encodeURI(client_id) + '&' + 'redirect_uri=' + encodeURI(redirect_uri) + '&' + 'scope=' + encodeURI(scope) + '&' + 'nonce=' + encodeURI(nonce) + '&' + 'state=' + encodeURI(state);
            window.location.href = url;
          }
        }, {
          key: "AuthorizedCallback",
          value: function AuthorizedCallback() {
            this.ResetAuthorizationData();
            var hash = window.location.hash.substr(1);
            var result = hash.split('&').reduce(function (result, item) {
              var parts = item.split('=');
              result[parts[0]] = parts[1];
              return result;
            }, {});
            console.log(result);
            var token = '';
            var id_token = '';
            var authResponseIsValid = false;

            if (!result.error) {
              if (result.state !== this.storage.retrieve('authStateControl')) {
                console.log('AuthorizedCallback incorrect state');
              } else {
                token = result.access_token;
                id_token = result.id_token;
                var dataIdToken = this.getDataFromToken(id_token); // validate nonce

                if (dataIdToken.nonce !== this.storage.retrieve('authNonce')) {
                  console.log('AuthorizedCallback incorrect nonce');
                } else {
                  this.storage.store('authNonce', '');
                  this.storage.store('authStateControl', '');
                  authResponseIsValid = true;
                  console.log('AuthorizedCallback state and nonce validated, returning access token');
                }
              }
            }

            if (authResponseIsValid) {
              this.SetAuthorizationData(token, id_token);
            }
          }
        }, {
          key: "Logoff",
          value: function Logoff() {
            var authorizationUrl = this.authorityUrl + '/connect/endsession';
            var id_token_hint = this.storage.retrieve('authorizationDataIdToken');
            var post_logout_redirect_uri = location.origin + '/';
            var url = authorizationUrl + '?' + 'id_token_hint=' + encodeURI(id_token_hint) + '&' + 'post_logout_redirect_uri=' + encodeURI(post_logout_redirect_uri);
            this.ResetAuthorizationData(); // emit observable

            this.authenticationSource.next(false);
            window.location.href = url;
          }
        }, {
          key: "HandleError",
          value: function HandleError(error) {
            console.log(error);

            if (error.status == 403) {
              this._router.navigate(['/Forbidden']);
            } else if (error.status == 401) {
              // this.ResetAuthorizationData();
              this._router.navigate(['/Unauthorized']);
            }
          }
        }, {
          key: "urlBase64Decode",
          value: function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');

            switch (output.length % 4) {
              case 0:
                break;

              case 2:
                output += '==';
                break;

              case 3:
                output += '=';
                break;

              default:
                throw 'Illegal base64url string!';
            }

            return window.atob(output);
          }
        }, {
          key: "getDataFromToken",
          value: function getDataFromToken(token) {
            var data = {};

            if (typeof token !== 'undefined') {
              var encoded = token.split('.')[1];
              data = JSON.parse(this.urlBase64Decode(encoded));
            }

            return data;
          }
        }, {
          key: "setHeaders",
          value: function setHeaders() {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            };
            httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
            httpOptions.headers = httpOptions.headers.set('Accept', 'application/json');
            var token = this.GetToken();

            if (token !== '') {
              httpOptions.headers = httpOptions.headers.set('Authorization', "Bearer ".concat(token));
            }

            return httpOptions;
          }
        }]);

        return SecurityService;
      }();

      SecurityService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      SecurityService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])], SecurityService);
      /***/
    },

    /***/
    "xfXm":
    /*!***********************************!*\
      !*** ./src/modules/app.routes.ts ***!
      \***********************************/

    /*! exports provided: routes, routing */

    /***/
    function xfXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routing", function () {
        return routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _basket_basket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basket/basket.component */
      "AiEP");
      /* harmony import */


      var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalog/catalog.component */
      "9fF1");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders/orders.component */
      "aMt0");
      /* harmony import */


      var _orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orders/orders-detail/orders-detail.component */
      "H5iX");
      /* harmony import */


      var _orders_orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders/orders-new/orders-new.component */
      "6lyU");

      var routes = [{
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full'
      }, {
        path: 'basket',
        component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_1__["BasketComponent"]
      }, {
        path: 'catalog',
        component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]
      }, {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
      }, {
        path: 'orders/:id',
        component: _orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrdersDetailComponent"]
      }, {
        path: 'order',
        component: _orders_orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__["OrdersNewComponent"]
      }];

      var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
        relativeLinkResolution: 'legacy'
      });
      /***/

    },

    /***/
    "ywjI":
    /*!************************************!*\
      !*** ./src/modules/app.service.ts ***!
      \************************************/

    /*! exports provided: AppService */

    /***/
    function ywjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppService = function AppService() {
        _classCallCheck(this, AppService);
      };

      AppService.ctorParameters = function () {
        return [];
      };

      AppService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], AppService);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _modules_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/app.module */
      "fvGp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_modules_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map