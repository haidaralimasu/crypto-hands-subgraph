// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get _betId(): BigInt {
    let value = this.get("_betId");
    return value!.toBigInt();
  }

  set _betId(value: BigInt) {
    this.set("_betId", Value.fromBigInt(value));
  }

  get _playerChoice(): i32 {
    let value = this.get("_playerChoice");
    return value!.toI32();
  }

  set _playerChoice(value: i32) {
    this.set("_playerChoice", Value.fromI32(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Approval must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value!.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class ApprovalForAll extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ApprovalForAll entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ApprovalForAll must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ApprovalForAll", id.toString(), this);
    }
  }

  static load(id: string): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(store.get("ApprovalForAll", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class BaseUriUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BaseUriUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BaseUriUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BaseUriUpdated", id.toString(), this);
    }
  }

  static load(id: string): BaseUriUpdated | null {
    return changetype<BaseUriUpdated | null>(store.get("BaseUriUpdated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newBaseUri(): string {
    let value = this.get("newBaseUri");
    return value!.toString();
  }

  set newBaseUri(value: string) {
    this.set("newBaseUri", Value.fromString(value));
  }
}

export class ConsecutiveTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ConsecutiveTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ConsecutiveTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ConsecutiveTransfer", id.toString(), this);
    }
  }

  static load(id: string): ConsecutiveTransfer | null {
    return changetype<ConsecutiveTransfer | null>(
      store.get("ConsecutiveTransfer", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromTokenId(): BigInt {
    let value = this.get("fromTokenId");
    return value!.toBigInt();
  }

  set fromTokenId(value: BigInt) {
    this.set("fromTokenId", Value.fromBigInt(value));
  }

  get toTokenId(): BigInt {
    let value = this.get("toTokenId");
    return value!.toBigInt();
  }

  set toTokenId(value: BigInt) {
    this.set("toTokenId", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class GameAddressUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GameAddressUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GameAddressUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GameAddressUpdated", id.toString(), this);
    }
  }

  static load(id: string): GameAddressUpdated | null {
    return changetype<GameAddressUpdated | null>(
      store.get("GameAddressUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get game(): Bytes {
    let value = this.get("game");
    return value!.toBytes();
  }

  set game(value: Bytes) {
    this.set("game", Value.fromBytes(value));
  }
}

export class HandsMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HandsMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HandsMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HandsMinted", id.toString(), this);
    }
  }

  static load(id: string): HandsMinted | null {
    return changetype<HandsMinted | null>(store.get("HandsMinted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class HandsWon extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HandsWon entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HandsWon must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HandsWon", id.toString(), this);
    }
  }

  static load(id: string): HandsWon | null {
    return changetype<HandsWon | null>(store.get("HandsWon", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get winner(): Bytes {
    let value = this.get("winner");
    return value!.toBytes();
  }

  set winner(value: Bytes) {
    this.set("winner", Value.fromBytes(value));
  }
}

export class HiddenUriUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HiddenUriUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HiddenUriUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HiddenUriUpdated", id.toString(), this);
    }
  }

  static load(id: string): HiddenUriUpdated | null {
    return changetype<HiddenUriUpdated | null>(
      store.get("HiddenUriUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newHiddenUri(): string {
    let value = this.get("newHiddenUri");
    return value!.toString();
  }

  set newHiddenUri(value: string) {
    this.set("newHiddenUri", Value.fromString(value));
  }
}

export class ContractOwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ContractOwnershipTransferred entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContractOwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContractOwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): ContractOwnershipTransferred | null {
    return changetype<ContractOwnershipTransferred | null>(
      store.get("ContractOwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class ContractPaused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ContractPaused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContractPaused must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContractPaused", id.toString(), this);
    }
  }

  static load(id: string): ContractPaused | null {
    return changetype<ContractPaused | null>(store.get("ContractPaused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class PresaleToggled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PresaleToggled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PresaleToggled must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PresaleToggled", id.toString(), this);
    }
  }

  static load(id: string): PresaleToggled | null {
    return changetype<PresaleToggled | null>(store.get("PresaleToggled", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class PriceUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PriceUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PriceUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PriceUpdated", id.toString(), this);
    }
  }

  static load(id: string): PriceUpdated | null {
    return changetype<PriceUpdated | null>(store.get("PriceUpdated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newPrice(): BigInt {
    let value = this.get("newPrice");
    return value!.toBigInt();
  }

  set newPrice(value: BigInt) {
    this.set("newPrice", Value.fromBigInt(value));
  }
}

export class Revealed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Revealed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Revealed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Revealed", id.toString(), this);
    }
  }

  static load(id: string): Revealed | null {
    return changetype<Revealed | null>(store.get("Revealed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class RootHashUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RootHashUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RootHashUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RootHashUpdated", id.toString(), this);
    }
  }

  static load(id: string): RootHashUpdated | null {
    return changetype<RootHashUpdated | null>(store.get("RootHashUpdated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newRootHash(): Bytes {
    let value = this.get("newRootHash");
    return value!.toBytes();
  }

  set newRootHash(value: Bytes) {
    this.set("newRootHash", Value.fromBytes(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class ContractUnpaused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ContractUnpaused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContractUnpaused must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContractUnpaused", id.toString(), this);
    }
  }

  static load(id: string): ContractUnpaused | null {
    return changetype<ContractUnpaused | null>(
      store.get("ContractUnpaused", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class WhitelistAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WhitelistAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WhitelistAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WhitelistAdded", id.toString(), this);
    }
  }

  static load(id: string): WhitelistAdded | null {
    return changetype<WhitelistAdded | null>(store.get("WhitelistAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }
}

export class WhitelistRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WhitelistRemoved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WhitelistRemoved must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WhitelistRemoved", id.toString(), this);
    }
  }

  static load(id: string): WhitelistRemoved | null {
    return changetype<WhitelistRemoved | null>(
      store.get("WhitelistRemoved", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }
}
