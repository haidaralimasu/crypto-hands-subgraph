import {
  BetCreated as BetCreatedEvent,
  CryptoHandsUpdated as CryptoHandsUpdatedEvent,
  DividerUpdated as DividerUpdatedEvent,
  MaxBetUpdated as MaxBetUpdatedEvent,
  MinBetUpdated as MinBetUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  ResultsDeclared as ResultsDeclaredEvent,
  Unpaused as UnpausedEvent,
} from "../generated/RockPaperScissors/RockPaperScissors";
import {
  BetCreated,
  CryptoHandsUpdated,
  DividerUpdated,
  MaxBetUpdated,
  MinBetUpdated,
  OwnershipTransferred,
  Paused,
  ResultsDeclared,
  Unpaused,
} from "../generated/schema";

export function handleBetCreated(event: BetCreatedEvent): void {
  let entity = new BetCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._betId = event.params._betId;
  entity._playerChoice = event.params._playerChoice;
  entity._player = event.params._player;
  entity._betAmount = event.params._betAmount;
  entity._winAmount = event.params._winAmount;
  entity._time = event.params._time;
  entity.save();
}

export function handleCryptoHandsUpdated(event: CryptoHandsUpdatedEvent): void {
  let entity = new CryptoHandsUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._newCryptoHands = event.params._newCryptoHands;
  entity.save();
}

export function handleDividerUpdated(event: DividerUpdatedEvent): void {
  let entity = new DividerUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._newDivider = event.params._newDivider;
  entity.save();
}

export function handleMaxBetUpdated(event: MaxBetUpdatedEvent): void {
  let entity = new MaxBetUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._newMaxBet = event.params._newMaxBet;
  entity.save();
}

export function handleMinBetUpdated(event: MinBetUpdatedEvent): void {
  let entity = new MinBetUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._newMinBet = event.params._newMinBet;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.account = event.params.account;
  entity.save();
}

export function handleResultsDeclared(event: ResultsDeclaredEvent): void {
  let entity = new ResultsDeclared(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._betId = event.params._betId;
  entity._choice = event.params._choice;
  entity._outcome = event.params._outcome;
  entity._amount = event.params._amount;
  entity._winAmount = event.params._winAmount;
  entity._player = event.params._player;
  entity._result = event.params._result;
  entity._time = event.params._time;
  entity.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.account = event.params.account;
  entity.save();
}
