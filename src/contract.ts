import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseUriUpdated as BaseUriUpdatedEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  GameAddressUpdated as GameAddressUpdatedEvent,
  HandsMinted as HandsMintedEvent,
  HandsWon as HandsWonEvent,
  HiddenUriUpdated as HiddenUriUpdatedEvent,
  ContractOwnershipTransferred as ContractOwnershipTransferredEvent,
  ContractPaused as ContractPausedEvent,
  PresaleToggled as PresaleToggledEvent,
  PriceUpdated as PriceUpdatedEvent,
  Revealed as RevealedEvent,
  RootHashUpdated as RootHashUpdatedEvent,
  Transfer as TransferEvent,
  ContractUnpaused as ContractUnpausedEvent,
  WhitelistAdded as WhitelistAddedEvent,
  WhitelistRemoved as WhitelistRemovedEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  BaseUriUpdated,
  ConsecutiveTransfer,
  GameAddressUpdated,
  HandsMinted,
  HandsWon,
  HiddenUriUpdated,
  ContractOwnershipTransferred,
  ContractPaused,
  PresaleToggled,
  PriceUpdated,
  Revealed,
  RootHashUpdated,
  Transfer,
  ContractUnpaused,
  WhitelistAdded,
  WhitelistRemoved
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleBaseUriUpdated(event: BaseUriUpdatedEvent): void {
  let entity = new BaseUriUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newBaseUri = event.params.newBaseUri
  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleGameAddressUpdated(event: GameAddressUpdatedEvent): void {
  let entity = new GameAddressUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.game = event.params.game
  entity.save()
}

export function handleHandsMinted(event: HandsMintedEvent): void {
  let entity = new HandsMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.save()
}

export function handleHandsWon(event: HandsWonEvent): void {
  let entity = new HandsWon(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.save()
}

export function handleHiddenUriUpdated(event: HiddenUriUpdatedEvent): void {
  let entity = new HiddenUriUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newHiddenUri = event.params.newHiddenUri
  entity.save()
}

export function handleContractOwnershipTransferred(
  event: ContractOwnershipTransferredEvent
): void {
  let entity = new ContractOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleContractPaused(event: ContractPausedEvent): void {
  let entity = new ContractPaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handlePresaleToggled(event: PresaleToggledEvent): void {
  let entity = new PresaleToggled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handlePriceUpdated(event: PriceUpdatedEvent): void {
  let entity = new PriceUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newPrice = event.params.newPrice
  entity.save()
}

export function handleRevealed(event: RevealedEvent): void {
  let entity = new Revealed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleRootHashUpdated(event: RootHashUpdatedEvent): void {
  let entity = new RootHashUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newRootHash = event.params.newRootHash
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleContractUnpaused(event: ContractUnpausedEvent): void {
  let entity = new ContractUnpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleWhitelistAdded(event: WhitelistAddedEvent): void {
  let entity = new WhitelistAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}

export function handleWhitelistRemoved(event: WhitelistRemovedEvent): void {
  let entity = new WhitelistRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}
