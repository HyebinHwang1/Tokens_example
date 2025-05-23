"use client";

import { Button } from "@/components/ui/button/Button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen">
      <Modal>
        <ModalTrigger>Open</ModalTrigger>
        <ModalContent>
          <ModalDescription>
            IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。
          </ModalDescription>
          <ModalFooter className="flex flex-row gap-2 border-t border-gray-200">
            <Button size="full" className="h-10" variant="light">
              キャンセル
            </Button>
            <Button size="full" className="h-10" variant="dark">
              確認
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
